import InstagramImg from "../assets/imagenes/Instagram.jpg";
import FacebookImg from "../assets/imagenes/Facebook.png";

const Footer = () => {
return (
    <footer className="bg-secondary text-white border-top border-dark">
        <div className="container text-center py-3">
        <div className="d-flex justify-content-center gap-3 mb-3">
            <a href="#" className="d-flex align-items-center text-white text-decoration-none">
            <img src={InstagramImg} alt="Instagram" className="social-icon" />
            <span className="ms-2">elateneograndsplendid</span>
            </a>
            <a href="#" className="d-flex align-items-center text-white text-decoration-none">
            <img src={FacebookImg} alt="Facebook" className="social-icon" />
            <span className="ms-2">elateneograndsplendid</span>
            </a>
        </div>
        <p className="mb-1">&copy; 2025 Librería El Ateneo.</p>
        <p className="mb-0">
            <a href="#" className="text-white text-decoration-underline me-2">Términos y condiciones</a>
            <a href="#" className="text-white text-decoration-underline ms-2">Política de privacidad</a>
        </p>
    </div>
    </footer>
);
};

export default Footer;