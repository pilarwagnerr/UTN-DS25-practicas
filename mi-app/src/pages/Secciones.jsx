import { useParams } from 'react-router-dom';
import LibroDestacado from '../components/LibroDestacado';

import ficcion1Img from '../assets/imagenes/Ficcion1.png';
import ficcion2Img from '../assets/imagenes/ficcion2.jpg';
import ficcion3Img from '../assets/imagenes/Ficcion3.jpg';
import ficcion4Img from '../assets/imagenes/Ficcion4.jpg';
import ficcion5Img from '../assets/imagenes/Ficcion5.jpg';
import ficcion6Img from '../assets/imagenes/Ficcion6.jpg';
import ficcion7Img from '../assets/imagenes/Ficcion7.jpg';

import infantil1Img from '../assets/imagenes/Infantil1.jpg';
import infantil2Img from '../assets/imagenes/Infantil2.jpg';
import infantil3Img from '../assets/imagenes/Infantil3.jpg';
import infantil4Img from '../assets/imagenes/Infantil4.jpg';
import infantil5Img from '../assets/imagenes/Infantil5.jpg';
import infantil6Img from '../assets/imagenes/Infantil6.jpg';
import infantil7Img from '../assets/imagenes/Infantil7.jpg';

import terror1Img from '../assets/imagenes/Terror1.jpg';
import terror2Img from '../assets/imagenes/Terror2.jpg';
import terror3Img from '../assets/imagenes/Terror3.jpeg';
import terror4Img from '../assets/imagenes/Terror4.jpeg';
import terror5Img from '../assets/imagenes/Terror5.jpg';
import terror6Img from '../assets/imagenes/Terror6.jpg';
import terror7Img from '../assets/imagenes/Terror7.jpg';

import romance1Img from '../assets/imagenes/Romance1.jpg';
import romance2Img from '../assets/imagenes/Romance2.jpg';
import romance3Img from '../assets/imagenes/Romance3.jpg';
import romance4Img from '../assets/imagenes/Romance4.jpg';
import romance5Img from '../assets/imagenes/Romance5.jpg';
import romance6Img from '../assets/imagenes/Romance6.jpg';
import romance7Img from '../assets/imagenes/Romance7.jpg';

const todosLibros = {
destacados: [
    { id: 1, titulo: "Los Juegos del Hambre", descripcion: '"Los Juegos del Hambre" - Suzanne Collins', imagen: ficcion1Img, ruta: "/ficcion" },
    { id: 2, titulo: "El Principito", descripcion: '"El Principito" - Antoine de Saint-Exupery', imagen: infantil1Img, ruta: "/infantil" },
    { id: 3, titulo: "El Exorcista", descripcion: '"El Exorcista" - William Peter Blatty', imagen: terror1Img, ruta: "/terror" },
    { id: 4, titulo: "After", descripcion: '"After" - Anna Todd', imagen: romance1Img, ruta: "/romance" },
],
ficcion: [
    { id: 1, titulo: "Los Juegos del Hambre", descripcion: '"Los Juegos del Hambre" - Suzanne Collins', imagen: ficcion1Img, ruta: "/ficcion" },
    { id: 2, titulo: "Dune", descripcion: '"Dune" - Frank Herbert', imagen: ficcion2Img, ruta: "/ficcion" },
    { id: 3, titulo: "Divergente", descripcion: '"Divergente" - Veronica Roth', imagen: ficcion3Img, ruta: "/ficcion" },
    { id: 4, titulo: "1984", descripcion: '"1984" - George Orwell', imagen: ficcion4Img, ruta: "/ficcion" },
    { id: 5, titulo: "Maze Runner", descripcion: '"Maze Runner" - James Dashner', imagen: ficcion5Img, ruta: "/ficcion" },
    { id: 6, titulo: "Las aventuras de Sherlock Holmes", descripcion: '"Las aventuras de Sherlock Holmes" - Arthur Conan Doyle', imagen: ficcion6Img, ruta: "/ficcion" },
    { id: 7, titulo: "La máquina del tiempo", descripcion: '"La máquina del tiempo" - H. G. Wells', imagen: ficcion7Img, ruta: "/ficcion" }
],
infantil: [
    { id: 1, titulo: "El Principito", descripcion: '"El Principito" - Antoine de Saint-Exupery', imagen: infantil1Img, ruta: "/infantil" },
    { id: 2, titulo: "Caperucita Roja", descripcion: '"Caperucita Roja" - Jacob y Wilhelm Grimm', imagen: infantil2Img, ruta: "/infantil" },
    { id: 3, titulo: "El libro de la selva", descripcion: '"El libro de la selva" - Rudyard Kipling', imagen: infantil3Img, ruta: "/infantil" },
    { id: 4, titulo: "Matilda", descripcion: '"Matilda" - Roald Dahl', imagen: infantil4Img, ruta: "/infantil" },
    { id: 5, titulo: "Las aventuras de Pinocho", descripcion: '"Las aventuras de Pinocho" - Carlo Collodi', imagen: infantil5Img, ruta: "/infantil" },
    { id: 6, titulo: "El patito feo", descripcion: '"El patito feo" - Hans Christian Andersen', imagen: infantil6Img, ruta: "/infantil" },
    { id: 7, titulo: "Las aventuras de Alicia en el País de las Maravillas", descripcion: '"Las aventuras de Alicia en el País de las Maravillas" - Lewis Carroll', imagen: infantil7Img, ruta: "/infantil" }
],
terror: [
    { id: 1, titulo: "El Exorcista", descripcion: '"El Exorcista" - William Peter Blatty', imagen: terror1Img, ruta: "/terror" },
    { id: 2, titulo: "IT", descripcion: '"IT" - Stephen King', imagen: terror2Img, ruta: "/terror" },
    { id: 3, titulo: "El pacto", descripcion: '"El pacto" - Laura Alvea y José Ortuño', imagen: terror3Img, ruta: "/terror" },
    { id: 4, titulo: "La cabaña", descripcion: '"La cabaña" - Natasha Preston', imagen: terror4Img, ruta: "/terror" },
    { id: 5, titulo: "Los del otro lado", descripcion: '"Los del otro lado" - Christopher Buehlman', imagen: terror5Img, ruta: "/terror" },
    { id: 6, titulo: "La casa de las sombras", descripcion: '"La casa de las sombras" - Adam Nevill', imagen: terror6Img, ruta: "/terror" },
    { id: 7, titulo: "La maldición de Hill House", descripcion: '"La maldición de Hill House" - Shirley Jackson', imagen: terror7Img, ruta: "/terror" }
],
romance: [
    { id: 1, titulo: "After", descripcion: '"After" - Anna Todd', imagen: romance1Img, ruta: "/romance" },
    { id: 2, titulo: "Culpa mía", descripcion: '"Culpa mía" - Mercedes Ron', imagen: romance2Img, ruta: "/romance" },
    { id: 3, titulo: "Romper el círculo", descripcion: '"Romper el círculo" - Colleen Hoover', imagen: romance3Img, ruta: "/romance" },
    { id: 4, titulo: "Yo antes de ti", descripcion: '"Yo antes de ti" - Jojo Moyes', imagen: romance4Img, ruta: "/romance" },
    { id: 5, titulo: "Lo que el viento se llevó", descripcion: '"Lo que el viento se llevó" - Margaret Mitchell', imagen: romance5Img, ruta: "/romance" },
    { id: 6, titulo: "Antes de diciembre", descripcion: '"Antes de diciembre" - Joana Marcús', imagen: romance6Img, ruta: "/romance" },
    { id: 7, titulo: "A dos metros de ti", descripcion: '"A dos metros de ti" - Rachael Lippincott', imagen: romance7Img, ruta: "/romance" }
]
};

const titulosSeccion = {
destacados: "NUESTROS LIBROS DESTACADOS...",
ficcion: "NUESTRAS HISTORIAS DE CIENCIA FICCIÓN...",
infantil: "NUESTROS LIBROS INFANTILES...",
terror: "NUESTRAS HISTORIAS DE TERROR...",
romance: "NUESTRAS HISTORIAS DE AMOR..."
};

const Secciones = () => {
const { categoria } = useParams();
const libros = todosLibros[categoria] || [];

return (
    <div className="seccion-libros">
    <h2>{titulosSeccion[categoria]}</h2>
    <div className="books-grid">
        {libros.map(libro => (
        <LibroDestacado key={libro.id} {...libro} />
        ))}
    </div>
    </div>
);
};

export default Secciones;
