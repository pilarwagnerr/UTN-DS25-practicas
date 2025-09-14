import logoElAteneo from '../assets/imagenes/logo-librería.png';

const Header = () => {
    return (
        <div id="cabecera">
            <span className="titulo-header">Librería El Ateneo</span>
            <img src={logoElAteneo} alt="Librería El Ateneo" />
        </div>
    );
};

export default Header;