import { useState, useEffect } from "react";

export function useLibros(categoria) {
const [libros, setLibros] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    setLoading(true);

    const url = categoria
    ? `http://localhost:3000/api/books?categoria=ficcion`
    : "http://localhost:3000/api/books";

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const librosApi = (data.books || data || []).map((item) => ({
        id: String(item.id),
        titulo: item.titulo || "Sin título",
        descripcion: item.descripcion || "Sin descripción",
        categoria: item.categoria || "general",
        imagen: item.imagen || "https://via.placeholder.com/150",
        }));
        setLibros(librosApi);
        setLoading(false);
    })
    .catch((err) => {
        setError(err);
        setLoading(false);
    });
}, [categoria]);

return { libros, loading, error };
}