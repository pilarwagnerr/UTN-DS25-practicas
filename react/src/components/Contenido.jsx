import LibroDestacado from './LibroDestacado';

import juegosImg from '../assets/imagenes/Ficcion1.png';
import principitoImg from '../assets/imagenes/Infantil1.jpg';
import exorcistaImg from '../assets/imagenes/Terror1.jpg';
import afterImg from '../assets/imagenes/Romance1.jpg';

const Contenido = () => {
    return (
        <div id="contenido">
            <LibroDestacado
                titulo="¡FICCIÓN DESTACADO!"
                descripcion='"Los Juegos del Hambre" - Suzanne Collins'
                imagen={juegosImg}
                enlace="ficcion.html"
            />
            <LibroDestacado
                titulo="¡INFANTIL DESTACADO!"
                descripcion='"El Principito" -  Antoine de Saint-Exupery'
                imagen={principitoImg}
                enlace="infantil.html"
            />
            <LibroDestacado
                titulo="¡TERROR DESTACADO!"
                descripcion='"El Exorcista" - William Peter Blatty'
                imagen={exorcistaImg}
                enlace="terror.html"
            />
            <LibroDestacado
                titulo="¡ROMANCE DESTACADO!"
                descripcion='"After" - Anna Todd'
                imagen={afterImg}
                enlace="romance.html"
            />
        </div>
    );
};

export default Contenido;