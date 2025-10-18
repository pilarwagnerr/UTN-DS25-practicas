import { createContext, useState, useEffect } from "react";

export const CatalogoContext = createContext();

const CatalogoProvider = ({ children }) => {
const [catalogo, setCatalogo] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    fetch("http://localhost:3000/api/books")
    .then((res) => res.json())
    .then((data) => {
        setCatalogo(data.books || []);
        setLoading(false);
    })
    .catch((err) => {
        console.error(err);
        setLoading(false);
    });
}, []);

return (
    <CatalogoContext.Provider value={{ catalogo, setCatalogo, loading }}>
    {children}
    </CatalogoContext.Provider>
);
};

export default CatalogoProvider;