import { RequestHandler, ErrorRequestHandler } from 'express';
import { log } from '../../utils';

const handleRequest: RequestHandler = (req, res, next) => {
  const { method, originalUrl } = req;
  const start: Date = new Date();

  res.on('finish', () => {
    const { statusCode, statusMessage } = res;
    const duration: number = new Date().getTime() - start.getTime();

    log.info(
      `${'REQID'} -> [ ${method} ] ${statusCode}, ${statusMessage}, ${originalUrl} :: ${duration}`
    );
  });

  next();
};

const handleNotFound: RequestHandler = (req, res, next) => {
  const error = new Error('endpoint not found');

  next(error);
};

const handleErrors: ErrorRequestHandler = (err, req, res, next): void => {
  log.error(err, 'Errorhandler: ');

  res.status(500).json({
    ok: false,
    status: 500,
  });
};

export { handleErrors, handleNotFound, handleRequest };
