import { getAllBooks } from "./book.controller";
import * as service from "../services/book.service";
import { Request, Response } from "express";

describe("Book Controller", () => {
it("getAllBooks debería llamar al servicio y devolver status 200", async () => {
    const mockBooks: any = [{ id: 1, title: "Libro 1" }];

    jest.spyOn(service, "getBooks").mockResolvedValue(mockBooks);

    const req = { query: {} } as Request;

    const res = {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
    } as unknown as Response;

    await getAllBooks(req, res, jest.fn());

    expect(service.getBooks).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
    success: true,
    books: mockBooks,
    total: mockBooks.length,
    });
});
});
