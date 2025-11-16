import request from "supertest";
import app from "../app";
import * as bookService from "../services/book.service";

// Mock de autenticación y autorización (siempre dejan pasar)
jest.mock("../middlewares/auth.middleware", () => ({
authenticate: (req: any, res: any, next: any) => next(),
authorize: () => (req: any, res: any, next: any) => next(),
}));

// Mock del servicio para evitar llamadas reales a Prisma
jest.mock("../services/book.service");

describe("Book Routes", () => {
it("GET /api/books debería responder 200 y devolver lista de libros", async () => {
    // Arrange: valores falsos de prueba
    const mockBooks = [
    { id: 1, title: "Libro 1" },
    { id: 2, title: "Libro 2" }
    ];

    (bookService.getBooks as jest.Mock).mockResolvedValue(mockBooks);

    // Act
    const res = await request(app).get("/api/books");

    // Assert
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.books).toEqual(mockBooks);
    expect(res.body.total).toBe(mockBooks.length);
});

it("GET /api/books/:id debería responder 404 si el libro no existe", async () => {
    (bookService.getBookById as jest.Mock).mockResolvedValue(null);

    const res = await request(app).get("/api/books/999");

    expect(res.status).toBe(404);
    expect(res.body.success).toBe(false);
});
});

