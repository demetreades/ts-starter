import { RequestHandler, ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { v4 as uuid } from 'uuid';
// import { AsyncLocalStorage } from 'async_hooks';
import HttpException from '@/utils/exceptions/HttpException';
import { log } from '@/utils';

// const asyncLocalStorage = new AsyncLocalStorage<{ id: string }>();

interface ICustomReq extends Request {
  id?: string;
}

const handleAsync =
  (middleware: RequestHandler) => (req: Request, res: Response, next: NextFunction) => {
    try {
      middleware(req, res, next);
    } catch (err: unknown) {
      next(err);
    }
  };
const handleRequest: RequestHandler = handleAsync((req: ICustomReq, res, next) => {
  const start = process.hrtime();
  const { method, originalUrl } = req;

  const reqId = uuid();
  req.id = reqId;

  res.on('finish', () => {
    const { statusCode, statusMessage } = res;

    // const isWarnLogLevel = res.statusCode >= 400;
    // log[isWarnLogLevel]();

    const end = process.hrtime(start);
    const duration = end[0] * 1000 + end[1] / 1e6;

    if (res.statusCode >= 400) {
      log.warn(
        `REQUEST [${reqId}]: [ ${method} ] ${statusCode}, ${statusMessage}, ${originalUrl} :: ${duration}`
      );

      next();
      return;
    }

    log.info(
      `REQUEST [${reqId}]: [ ${method} ] ${statusCode}, ${statusMessage}, ${originalUrl} :: ${duration}`
    );
  });

  next();
});

const handleNotFound: RequestHandler = handleAsync((req, res, next) => {
  const error = new HttpException(404, `endpoint not found "${req.originalUrl}"`);

  next(error);
});

const handleErrors: ErrorRequestHandler = (
  err: HttpException,
  req: ICustomReq,
  res,
  next
): void => {
  const { statusCode } = err;

  log.error({ err, req, res }, `ERROR [${req.id as string}]: ${err.message}`);

  res.status(statusCode ?? 500).json({
    ok: false,
    status: statusCode ?? 500,
  });
};

const handleAuth: RequestHandler = handleAsync((req, res, next) => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  throw new HttpException(403, 'Not Permitted');
});

// const handleAsyscLocalStorage = handleAsync(
//   (middleware) => (req: ICustomReq, res: Response, next: NextFunction) => {
//     asyncLocalStorage.run({ id: req.id }, () => {
//       middleware(req, res, next);
//     });
//   }
// );

export default {
  // handleAsyscLocalStorage,
  handleAsync,
  handleAuth,
  handleErrors,
  handleNotFound,
  handleRequest,
};
