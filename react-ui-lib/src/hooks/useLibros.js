import { useState, useEffect } from "react";

export function useLibros(apiUrl) {
const [libros, setLibros] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        const items = data.items || [];
        const librosApi = items.map((item, i) => ({
            id: item.id || i,
            titulo: item.volumeInfo.title,
            descripcion: item.volumeInfo.description || "Sin descripción",
            categoria: item.volumeInfo.categories?.[0] || "Sin categoría",
            imagen: item.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150"
        }));
        setLibros(librosApi);
        setLoading(false);
    })
    .catch(err => {
        setError(err);
        setLoading(false);
    });
}, [apiUrl]);

return { libros, loading, error };
}