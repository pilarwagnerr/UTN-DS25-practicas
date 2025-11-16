export const prisma = {
book: {
    findMany: jest.fn().mockResolvedValue([
    { id: 1, title: "Libro mock" }
    ])
}
};
