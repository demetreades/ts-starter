import express, { urlencoded, json, Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { corsConfig } from './config';
import { routes } from './api';
import { handleNotFound, handleErrors, handleRequest } from './api/middlewares';

const startApp = (): Application => {
  const app: Application = express();

  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.use(helmet());
  app.use(cors(corsConfig));
  app.use(handleRequest);

  app.use(routes);
  app.use(handleNotFound);
  app.use(handleErrors);

  return app;
};

export { startApp };
