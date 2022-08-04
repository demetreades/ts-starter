import express, { urlencoded, json, Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieSession from 'cookie-session';
import { corsConfig } from './config';
import { routes, middlewares } from './api';
import { log } from '@/utils';

const { handleNotFound, handleErrors, handleRequest } = middlewares;

const startApp = (): Application => {
  const app: Application = express();

  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(helmet());
  app.use(cors(corsConfig));
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
