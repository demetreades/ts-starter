import { Router } from 'express';
import users from './users';
import health from './health';

const routes = Router();

routes.use('/health', health);
routes.use('/users', users);

export { routes };
