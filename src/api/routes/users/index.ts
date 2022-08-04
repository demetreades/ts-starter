import { Router } from 'express';
import { users } from '../../controllers';
import middlewares from '../../middlewares';

const router = Router();

router.route('/register').post(users.register);
// router.use(middlewares.handleAuth);

router.route('/').get(users.get);
router.route('/:id').get(users.getAll);
router.route('/edit/:id').put(users.update).patch(users.partialUpdate);
router.route('/remove/:id').delete(users.remove);

export default router;
