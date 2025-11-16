import { Request, Response, NextFunction } from 'express';
import * as authorService from '../services/author.service';

export const getAllAuthors = async (req: Request, res: Response, next: NextFunction) => {
try {
    const authors = await authorService.getAuthors();
    res.json({ success: true, authors, total: authors.length });
} catch (error) {
    next(error);
}
};

export const getAuthor = async (req: Request, res: Response, next: NextFunction) => {
try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ success: false, message: 'ID inválido' });

    const author = await authorService.getAuthorById(id);
    if (!author) return res.status(404).json({ success: false, message: "Autor no encontrado" });

    res.json({ success: true, author, message: "Autor obtenido correctamente" });
} catch (error) {
    next(error);
}
};

export const createAuthor = async (req: Request, res: Response, next: NextFunction) => {
try {
    const author = await authorService.createAuthor(req.body);
    res.status(201).json({ success: true, author, message: "Autor creado correctamente" });
} catch (error) {
    next(error);
}
};

export const updateAuthor = async (req: Request, res: Response, next: NextFunction) => {
try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ success: false, message: 'ID inválido' });

    const author = await authorService.updateAuthor(id, req.body);
    res.json({ success: true, author, message: "Autor actualizado correctamente" });
} catch (error) {
    next(error);
}
};

export const deleteAuthor = async (req: Request, res: Response, next: NextFunction) => {
try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ success: false, message: 'ID inválido' });

    const deletedAuthor = await authorService.deleteAuthor(id);
    res.json({ success: true, author: deletedAuthor, message: "Autor eliminado correctamente" });
} catch (error) {
    next(error);
}
};