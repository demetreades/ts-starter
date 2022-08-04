import express, { urlencoded, json, Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { corsConfig } from './config';
import { routes } from './api';
import { handleNotFound, handleErrors, handleRequest } from './api/middlewares';
import { log } from '@/utils';

const startApp = (): Application => {
  const app: Application = express();

  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(helmet());
  app.use(cors(corsConfig));
  app.use(handleRequest);

  app.use(routes);
  app.use(handleNotFound);
  app.use(handleErrors);

  log.debug('Application created');

  return app;
};

export { startApp };
