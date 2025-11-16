import { getToday } from "./date.util";

describe("Utils - getToday", () => {
it("Debería devolver una fecha en formato YYYY-MM-DD", () => {
    const today = getToday();
    expect(today).toMatch(/^\d{4}-\d{2}-\d{2}$/);
});
});
