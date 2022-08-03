import { Router } from 'express';
import { users } from '../../controllers';

const router = Router();

router.route('/:id').get(users.create);
router.route('/create').post(users.create);
router.route('/edit/:id').put(users.create);
router.route('/edit/:id').patch(users.create);
router.route('/delete/:id').delete(users.create);

export default router;
