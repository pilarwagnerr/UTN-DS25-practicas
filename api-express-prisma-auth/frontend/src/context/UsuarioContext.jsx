import { createContext, useContext, useState } from "react";

const UsuarioContext = createContext();

export const useUsuario = () => useContext(UsuarioContext);

const UsuarioProvider = ({ children }) => {
const [usuario, setUsuario] = useState({
    registrado: false,
    user: null,
});

const logout = () => {
    setUsuario({ registrado: false, user: null });
    localStorage.removeItem("token");
};

return (
    <UsuarioContext.Provider value={{ usuario, setUsuario, logout }}>
    {children}
    </UsuarioContext.Provider>
);
};

export default UsuarioProvider;