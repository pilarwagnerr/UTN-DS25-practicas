import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import { validate } from '../middlewares/validations';
import { userSchema, updateUserSchema } from '../validations/user.validation';

const router = Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.post('/', validate(userSchema), userController.createUser);
router.put('/:id', validate(updateUserSchema), userController.updateUser);
router.delete('/:id', userController.deleteUser);

export const userRoutes = router;