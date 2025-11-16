import { Router } from 'express';
import * as contactController from '../controllers/contact.controller';
import { validate } from '../middlewares/validations';
import { contactSchema } from '../validations/contact.validation';

const router = Router();

router.get('/', contactController.getAllMessages);
router.get('/:id', contactController.getMessage);
router.post('/', validate(contactSchema), contactController.createMessage);
router.delete('/:id', contactController.deleteMessage);

export const contactRoutes = router;