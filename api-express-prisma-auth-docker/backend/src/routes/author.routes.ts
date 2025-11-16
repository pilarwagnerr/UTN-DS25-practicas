import { Router } from 'express';
import * as authorController from '../controllers/author.controller';
import { validate } from '../middlewares/validations';
import { authorSchema, updateAuthorSchema } from '../validations/author.validation';

const router = Router();

router.get('/', authorController.getAllAuthors);
router.get('/:id', authorController.getAuthor);
router.post('/', validate(authorSchema), authorController.createAuthor);
router.put('/:id', validate(updateAuthorSchema), authorController.updateAuthor);
router.delete('/:id', authorController.deleteAuthor);

export const authorRoutes = router;