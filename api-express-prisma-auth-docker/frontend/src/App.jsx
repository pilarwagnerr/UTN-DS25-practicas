import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
      <Layout>
        <Routes>

          {/* Rutas públicas */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />

          {/* Ruta protegida */}
          <Route
            path="/contacto"
            element={
              <PrivateRoute>
                <Contacto />
              </PrivateRoute>
            }
          />

          {/* Página por si intenta entrar sin permisos */}
          <Route path="/unauthorized" element={<div>No autorizado</div>} />

        </Routes>
      </Layout>
  );
}

export default App;


