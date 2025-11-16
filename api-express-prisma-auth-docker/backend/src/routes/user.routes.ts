import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import { validate } from '../middlewares/validations';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import { updateUserSchema } from '../validations/user.validation';

const router = Router();
router.get(
'/',
authenticate,
authorize('ADMIN'),          // Solo para roles Admin
userController.getAllUsers
);
router.get(
'/:id',
authenticate,
authorize('ADMIN'),
userController.getUser
);
router.post('/',
authenticate,
authorize('ADMIN'),
userController.createUser
);
router.put('/:id',
authenticate,
authorize('ADMIN'),
validate(updateUserSchema),
userController.updateUser
);
router.delete('/:id',
authenticate,
authorize('ADMIN'),
userController.deleteUser
);
export const userRoutes = router;