import { Link } from "react-router-dom";

const Menu = () => {
return (
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">

        <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#menu"
        >
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav mx-auto gap-3">

            <li className="nav-item">
            <Link className="nav-link fw-semibold" to="/home">
                Inicio
            </Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link fw-semibold" to="/contacto">
                Contacto
            </Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link fw-semibold" to="/login">
                Login
            </Link>
            </li>

        </ul>
        </div>

    </div>
    </nav>
);
};

export default Menu;
