import { Router } from 'express';
import { users } from '../../controllers';

const router = Router();

router.route('/').get(users.get);
router.route('/:id').get(users.getAll);
router.route('/register').post(users.register);
router.route('/edit/:id').put(users.update).patch(users.partialUpdate);
router.route('/delete/:id').delete(users.remove);

export default router;
