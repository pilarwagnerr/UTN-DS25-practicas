import { useLibros } from "../hooks/useLibros";
import { BootstrapBookCard } from "../components/BootstrapBookCard";

const Destacados = () => {
const { libros, loading, error } = useLibros("ficcion");

if (loading) return <p className="text-center mt-4">Cargando destacados...</p>;
if (error) return <p className="text-center mt-4">Error al cargar destacados</p>;

return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
    {libros.map((libro) => (
        <BootstrapBookCard key={libro.id} {...libro} />
    ))}
    </div>
);
};

export default Destacados;