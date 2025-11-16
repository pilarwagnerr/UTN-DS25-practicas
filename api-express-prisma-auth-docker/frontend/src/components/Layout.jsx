import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import CatalogoProvider from "../context/CatalogoContext";

function Layout({ children }) {
return (
    <CatalogoProvider>
    <div className="container-fluid p-0">

        {/* HEADER */}
        <Header />

        {/* MENÚ */}
        <div className="bg-light shadow-sm py-2">
        <Menu />
        </div>

        {/* CONTENIDO */}
        <main className="container my-4">
        {children}
        </main>

        {/* FOOTER */}
        <Footer />

    </div>
    </CatalogoProvider>
);
}

export default Layout;
