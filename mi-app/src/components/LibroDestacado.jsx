import { Link } from 'react-router-dom';

const LibroDestacado = ({ titulo, descripcion, imagen, ruta }) => {
    return (
        <article className="libro-destacado">
            <Link to={ruta} className="libro-titulo">{titulo}</Link>
            <p className="libro-descripcion">{descripcion}</p>
            <img src={imagen} alt={titulo} className="libro-imagen" />
        </article>
    );
};

export default LibroDestacado;