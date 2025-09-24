import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div id="menu">
            <div className="menu-bloque">
                <Link to="/destacados">DESTACADOS</Link>
                <Link to="/ficcion">SECCIÓN FICCIÓN</Link>
                <Link to="/infantil">SECCIÓN INFANTIL</Link>
                <Link to="/terror">SECCIÓN TERROR</Link>
                <Link to="/romance">SECCIÓN ROMANCE</Link>
            </div>
            <div className="menu-bloque">
                <Link to="/registro">REGISTRO</Link>
                <Link to="/contacto">CONTACTO</Link>
            </div>
        </div>
    );
};

export default Menu;