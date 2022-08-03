/* eslint-disable no-console */
import express, {
  urlencoded,
  json,
  Application,
  RequestHandler,
  ErrorRequestHandler,
} from 'express';
import helmet from 'helmet';
import cors from 'cors';
import utils from '@/utils';
import services from '@/services';
import { corsConfig } from '@/config';

const app: Application = express();

console.log(utils);
console.log(services);

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(helmet());
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
app.use(cors(corsConfig));

app.get('/ok', (req, res): void => {
  res.status(200).json({
    ok: true,
  });
});

const handleNotFound: RequestHandler = (req, res, next) => {
  const error = new Error('endpoint not found');

  next(error);
};

const handleErrors: ErrorRequestHandler = (err, req, res, next): void => {
  res.status(500).json({
    ok: false,
    status: 500,
  });
};

app.use(handleNotFound);
app.use(handleErrors);

// eslint-disable-next-line no-console
app.listen(5423, () => console.log('server listening at: 5423'));
