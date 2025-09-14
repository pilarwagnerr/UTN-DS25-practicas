import { useParams } from "react-router-dom";
import { useLibros } from "../hooks/useLibros";
import { BootstrapBookCard } from "../components/BootstrapBookCard";

const Secciones = () => {
const { categoria } = useParams();
const { libros, loading, error } = useLibros(categoria);

if (loading) return <p className="text-center mt-4">Cargando libros...</p>;
if (error) return <p className="text-center mt-4">Error al cargar libros</p>;

return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
    {libros.length > 0 ? (
        libros.map((libro) => <BootstrapBookCard key={libro.id} {...libro} />)
    ) : (
        <p className="text-center mt-4">No hay libros en esta categoría</p>
    )}
    </div>
);
};

export default Secciones;