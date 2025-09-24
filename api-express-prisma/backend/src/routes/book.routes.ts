import { Router } from "express";
import * as bookController from "../controllers/book.controller";
import { validate } from "../middlewares/validations";
import { bookSchema, updateBookSchema } from "../validations/book.validation";

const router = Router();

router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);
router.post("/", validate(bookSchema), bookController.createBook);
router.put("/:id", validate(updateBookSchema), bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

export const bookRoutes = router;