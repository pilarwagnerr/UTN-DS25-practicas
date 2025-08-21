import Header from './Header';
import Menu from './Menu';
import Contenido from './Contenido';
import Footer from './Footer';
import '../app.css';

const Layout = () => {
    return (
        <div id="contenedor">
                <Header />
                <Menu />
                <Contenido />
                <Footer />
        </div>
    );
};

export default Layout;