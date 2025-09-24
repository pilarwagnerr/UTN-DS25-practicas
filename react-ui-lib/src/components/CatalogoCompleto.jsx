import { useContext, useState } from "react";
import { CatalogoContext } from "../context/CatalogoContext";
import AgregarLibro from "./AgregarLibro";
import { BootstrapBookCard } from "./BootstrapBookCard";

const CatalogoCompleto = () => {
const { catalogo, setCatalogo, loading } = useContext(CatalogoContext);
const [busqueda, setBusqueda] = useState("");

const librosFiltrados = catalogo.filter((libro) =>
    libro.titulo.toLowerCase().includes(busqueda.toLowerCase())
);

if (loading) return <p className="text-center mt-4">Cargando catálogo...</p>;

const agregarLibro = (libro) => {
setCatalogo([libro, ...catalogo]);
};

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
};

export default CatalogoCompleto;