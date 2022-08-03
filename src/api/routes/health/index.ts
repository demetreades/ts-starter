import { Router } from 'express';
import { health } from '../../controllers';

const router = Router();

router.route('/check').get(health.check);

export default router;
