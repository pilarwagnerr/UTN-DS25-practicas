import { authenticate } from "./auth.middleware";
import { Request, Response } from "express";

describe("Auth Middleware", () => {
it("Debe responder 401 si no se envía un token", () => {
    const req = { headers: {} } as Request;

    const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
    } as unknown as Response;

    const next = jest.fn();

    authenticate(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
    success: false,
    error: "Token no proporcionado",
    });
});
});
