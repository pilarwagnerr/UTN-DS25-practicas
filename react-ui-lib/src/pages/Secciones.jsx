import { useParams } from "react-router-dom";
import { useLibros } from "../hooks/useLibros";
import { BootstrapBookCard } from "../components/BootstrapBookCard";

const categoriaMap = {
    ficcion: "fiction",
    terror: "horror",
    infantil: "children",
    romance: "romance"
};

const Secciones = () => {
const { categoria } = useParams();
const query = categoriaMap[categoria] || "fiction";
const { libros, loading, error } = useLibros(`https://www.googleapis.com/books/v1/volumes?q=${query}`);

if (loading) return <p className="text-center mt-4">Cargando libros...</p>;
if (error) return <p className="text-center mt-4">Error al cargar libros</p>;

return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
    {libros.map(libro => <BootstrapBookCard key={libro.id} {...libro} />)}
    </div>
);
};

export default Secciones;