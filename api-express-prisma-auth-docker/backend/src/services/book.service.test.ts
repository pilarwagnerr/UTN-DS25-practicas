import * as service from "./book.service";

describe("Book Service", () => {
it("getBooks debería ser una función", () => {
    expect(typeof service.getBooks).toBe("function");
});
});
