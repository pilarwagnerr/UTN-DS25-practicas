import { Routes, Route } from "react-router-dom";
import CatalogoProvider from "../context/CatalogoContext";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import Destacados from "../pages/Destacados";
import Secciones from "../pages/Secciones";
import Registro from "../pages/Registro";
import Contacto from "../pages/Contacto";
import CatalogoCompleto from "./CatalogoCompleto";

const Layout = () => {
return (
    <CatalogoProvider>
    <div className="container-fluid">
        <Header />
        <Menu />
        <main className="my-4">
        <Routes>
            <Route path="/" element={<Destacados />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/catalogo" element={<CatalogoCompleto />} />
            <Route path="/categoria/:categoria" element={<Secciones />} />
        </Routes>
        </main>
        <Footer />
    </div>
    </CatalogoProvider>
);
};

export default Layout;