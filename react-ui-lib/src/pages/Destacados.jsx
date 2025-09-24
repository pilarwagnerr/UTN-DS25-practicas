import { useState, useEffect } from "react";
import { BootstrapBookCard } from "../components/BootstrapBookCard";

const Destacados = () => {
const [libros, setLibros] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=fiction")
        .then(res => res.json())
        .then(data => {
        const items = data.items || [];
        const librosApi = items.map((item, i) => ({
            id: item.id || i,
            titulo: item.volumeInfo.title,
            descripcion: item.volumeInfo.description || "Sin descripción",
            categoria: "Destacados",
            imagen: item.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150",
        }));
        setLibros(librosApi);
        setLoading(false);
    })
    .catch(err => {
        console.error(err);
        setLoading(false);
    });
}, []);

if (loading) return <p className="text-center mt-4">Cargando destacados...</p>;

return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {libros.map(libro => (
        <BootstrapBookCard key={libro.id} {...libro} />
    ))}
    </div>
);
};

export default Destacados;