import LibroDestacado from '../components/LibroDestacado';

import ficcion1Img from '../assets/imagenes/Ficcion1.png';
import infantil1Img from '../assets/imagenes/Infantil1.jpg';
import terror1Img from '../assets/imagenes/Terror1.jpg';
import romance1Img from '../assets/imagenes/Romance1.jpg';

const Destacados = () => {
    const libros = [
        {
            id: 1,
            titulo: "¡FICCIÓN DESTACADO!",
            descripcion: '"Los Juegos del Hambre" - Suzanne Collins',
            imagen: ficcion1Img,
            ruta: "/ficcion"
        },
        {
            id: 2,
            titulo: "¡INFANTIL DESTACADO!",
            descripcion: '"El Principito" - Antoine de Saint-Exupery',
            imagen: infantil1Img,
            ruta: "/infantil"
        },
        {
            id: 3,
            titulo: "¡TERROR DESTACADO!",
            descripcion: '"El Exorcista" - William Peter Blatty',
            imagen: terror1Img,
            ruta: "/terror"
        },
        {
            id: 4,
            titulo: "¡ROMANCE DESTACADO!",
            descripcion: '"After" - Anna Todd',
            imagen: romance1Img,
            ruta: "/romance"
        },
    ];

    return (
        <div id="contenido">
            {libros.map((libro) => (
                <LibroDestacado key={libro.id} {...libro} />
            ))}
        </div>
    );
};

export default Destacados;