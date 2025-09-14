import { Routes, Route } from 'react-router-dom';
import '../App.css'; // estilos globales
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import Destacados from '../pages/Destacados';
import Registro from '../pages/Registro';
import Contacto from '../pages/Contacto';
import Secciones from '../pages/Secciones';

const Layout = () => {
return (
    <div id="contenedor">
    <Header />
    <Menu />
    <main>
        <Routes>
        <Route path="/" element={<Destacados />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/:categoria" element={<Secciones />} />
        </Routes>
    </main>
    <Footer />
    </div>
);
};

export default Layout;