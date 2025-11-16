import { Router } from "express";
import * as bookController from "../controllers/book.controller";
import { validate } from "../middlewares/validations";
import { updateBookSchema } from "../validations/book.validation";
import { authenticate, authorize } from '../middlewares/auth.middleware';

const router = Router();
router.get(
'/',
authenticate,                 // Verificar JWT
authorize('ADMIN', 'USER'),   // Admite roles Admin y Users
bookController.getAllBooks
);
router.get(
'/:id',
authenticate,
authorize('ADMIN', 'USER'),
bookController.getBookById
);
router.post('/',
authenticate,                
authorize('ADMIN', 'USER'),
bookController.createBook
);
router.put('/:id',
authenticate,
authorize('ADMIN', 'USER'),
validate(updateBookSchema),
bookController.updateBook
);
router.delete('/:id',
authenticate,
authorize('ADMIN'),           // Solo Admin puede borrar
bookController.deleteBook
);
export const bookRoutes = router;