import { Request, Response, NextFunction } from "express";
import * as bookService from "../services/book.service";
import { BookResponse, BooksListResponse } from "../types/book.types";

// Obtener todos los libros (con opción de filtrar por categoría)
export const getAllBooks = (
req: Request,
res: Response<BooksListResponse>,
next: NextFunction
) => {
try {
    const { categoria } = req.query;

    const books = categoria
    ? bookService.getBooksByCategory(String(categoria))
    : bookService.getBooks();
    res.json({
    success: true,
    books,
    total: books.length,
    });
} catch (error) {
    next(error);
}
};

// Obtener un libro por ID
export const getBookById = (
req: Request,
res: Response<BookResponse>,
next: NextFunction
) => {
try {
    const { id } = req.params;
    const book = bookService.getBookById(id);

    if (!book) {
    return res.status(404).json({
        success: false,
        message: "Libro no encontrado",
    });
    }

    res.json({
    success: true,
    book,
    message: "Libro obtenido correctamente",
    });
} catch (error) {
    next(error);
}
};

// Crear un libro
export const createBook = (
req: Request,
res: Response<BookResponse>,
next: NextFunction
) => {
try {
    const newBook = bookService.createBook(req.body);
    res.status(201).json({
    success: true,
    book: newBook,
    message: "Libro creado correctamente",
    });
} catch (error) {
    next(error);
}
};

// Actualizar un libro
export const updateBook = (
req: Request,
res: Response<BookResponse>,
next: NextFunction
) => {
try {
    const { id } = req.params;
    const updatedBook = bookService.updateBook(id, req.body);

    if (!updatedBook) {
    return res.status(404).json({
        success: false,
        message: "Libro no encontrado",
    });
    }

    res.json({
    success: true,
    book: updatedBook,
    message: "Libro actualizado correctamente",
    });
} catch (error) {
    next(error);
}
};

// Eliminar un libro
export const deleteBook = (
req: Request,
res: Response<BookResponse>,
next: NextFunction
) => {
try {
    const { id } = req.params;
    const deleted = bookService.deleteBook(id);

    if (!deleted) {
    return res.status(404).json({
        success: false,
        message: "Libro no encontrado",
    });
    }

    res.json({
    success: true,
    message: "Libro con id ${id} eliminado correctamente",
    });
} catch (error) {
    next(error);
}
};
