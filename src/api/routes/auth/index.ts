import { Router } from 'express';
import { auth } from '../../controllers';

const router = Router();

router.route('/login').post(auth.login);
router.route('/logout').get(auth.logout);

export default router;
