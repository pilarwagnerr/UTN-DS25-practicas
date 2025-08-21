import logoElAteneo from '../assets/imagenes/logo-librería.png';

const Header = () => {
    return (
        <div id="cabecera">
            <span className="titulo-header">LIBRERÍA EL ATENEO</span>
            <img src={logoElAteneo} alt="Librería Yenny" />
        </div>
    );
};

export default Header;