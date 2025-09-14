import { Book } from "../types/book.types";

let books: Book[] = [
        {
            id: "1",
            titulo: "Los Juegos del Hambre",
            descripcion: '"Los Juegos del Hambre" - Suzanne Collins',
            imagen: "https://via.placeholder.com/150",
            categoria: "ficcion",
        },
        {
            id: "2",
            titulo: "El Principito",
            descripcion: '"El Principito" - Antoine de Saint-Exupery',
            imagen: "https://via.placeholder.com/150",
            categoria: "infantil",
        },
        {
            id: "3",
            titulo: "El exorcista",
            descripcion: '"El Exorcista" - William Peter Blatty',
            imagen: "https://via.placeholder.com/150",
            categoria: "terror",
        },
        {
            id: "4",
            titulo: "After",
            descripcion: '"After" - Anna Todd',
            imagen: "https://via.placeholder.com/150",
            categoria: "romance",
        },
    ];


// Obtener todos los libros
export function getBooks(): Book[] {
return books;
}

// Obtener libros por categoría
export function getBooksByCategory(categoria: string): Book[] {
return books.filter(
    (b) => b.categoria.toLowerCase() === categoria.toLowerCase()
);
}

// Obtener por ID
export const getBookById = (id: string): Book | undefined =>
books.find((b) => b.id === id);

// Crear
export const createBook = (data: Partial<Book>): Book => {
const newBook: Book = {
    id: (books.length + 1).toString(),
    titulo: data.titulo || "Sin título",
    descripcion: data.descripcion || "Sin descripción",
    categoria: data.categoria || "General",
    imagen: data.imagen || "https://via.placeholder.com/150",
};
books.push(newBook);
return newBook;
};

// Actualizar
export const updateBook = (id: string, data: Partial<Book>): Book | null => {
const index = books.findIndex((b) => b.id === id);
if (index === -1) return null;

books[index] = { ...books[index], ...data };
return books[index];
};

// Eliminar
export const deleteBook = (id: string): boolean => {
const index = books.findIndex((b) => b.id === id);
if (index === -1) return false;

books.splice(index, 1);
return true;
};