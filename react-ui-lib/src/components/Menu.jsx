import { Link } from 'react-router-dom';

const Menu = () => {
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
        <div className="navbar-nav">
            <Link className="nav-link" to="/destacados">Destacados</Link>
            <Link className="nav-link" to="/ficcion">Ficción</Link>
            <Link className="nav-link" to="/infantil">Infantil</Link>
            <Link className="nav-link" to="/terror">Terror</Link>
            <Link className="nav-link" to="/romance">Romance</Link>
            <Link className="nav-link" to="/registro">Registro</Link>
            <Link className="nav-link" to="/contacto">Contacto</Link>
            <Link className="nav-link" to="/catalogo">Catálogo</Link>
        </div>
    </div>
    </nav>
);
};

export default Menu;