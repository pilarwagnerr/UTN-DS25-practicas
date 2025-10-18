import { useState, useEffect } from "react";
import { BootstrapBookCard } from "./BootstrapBookCard";
import AgregarLibro from "./AgregarLibro";

export default function CatalogoCompleto() {
const [catalogo, setCatalogo] = useState([]);
const [loading, setLoading] = useState(true);
const [busqueda, setBusqueda] = useState("");

useEffect(() => {
    fetch("http://localhost:3000/api/books")
    .then(res => res.json())
    .then(data => {
        setCatalogo(data.books);
        setLoading(false);
    })
    .catch(err => {
        console.error(err);
        setLoading(false);
    });
}, []);

const librosFiltrados = catalogo.filter(libro =>
    libro.titulo.toLowerCase().includes(busqueda.toLowerCase())
);

const agregarLibro = (libro) => {
    setCatalogo([libro, ...catalogo]);
};

if (loading) return <p className="text-center mt-4">Cargando catálogo...</p>;

return (
    <div className="container">
    <h2 className="mb-3">Catálogo Completo</h2>
    <input
        type="text"
        className="form-control mb-3"
        placeholder="Buscar libro..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
    />
    <div className="container py-4">
        <AgregarLibro onAgregar={agregarLibro} />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {librosFiltrados.map((libro) => (
            <BootstrapBookCard key={libro.id} {...libro} />
        ))}
        </div>
    </div>
    </div>
);
}