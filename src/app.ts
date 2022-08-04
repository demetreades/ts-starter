import express, { json, urlencoded, type Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieSession from 'cookie-session';
// import bodyParser from 'body-parser';
import { corsConfig } from './config';
import { routes } from './api/routes';
import middlewares from './api/middlewares';
import { log } from '@/utils';

const { handleNotFound, handleErrors, handleRequest } = middlewares;

const startApp = (): Application => {
  const app: Application = express();

  // app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded({ extended: true }));
  app.use(helmet());
  app.use(cors(corsConfig));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(
    cookieSession({
      keys: ['string'],
    })
  );

  app.use(handleRequest);

  app.use(routes);
  app.use(handleNotFound);
  app.use(handleErrors);

  log.debug('Application created');

  return app;
};

export { startApp };
