import { Router } from 'express';
import users from './users';
import health from './health';
import auth from './auth';

const routes = Router();

routes.use('/health', health);
routes.use('/users', users);
routes.use('/auth', auth);

export { routes };
