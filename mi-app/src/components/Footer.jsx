import { Link } from "react-router-dom";
import InstagramImg from "../assets/imagenes/Instagram.jpg";
import FacebookImg from "../assets/imagenes/Facebook.png";

const Footer = () => { 
    return ( 
        <footer> 
            <div className="social-media"> 
                <Link to="#">
                    <img src={InstagramImg} alt="Instagram" /> 
                    <span id="ig"></span> elateneograndsplendid
                </Link> 
                <Link to="#">
                    <img src={FacebookImg} alt="Facebook" /> 
                    <span id="fb"></span> elateneograndsplendid
                </Link> 
            </div> 
            <p>&copy; 2025 Librería El Ateneo.</p> 
            <p> 
                <Link to="#">Términos y condiciones</Link> | <Link to="#">Política de privacidad</Link> 
            </p> 
        </footer> 
    ); 
}; 

export default Footer;