import { createContext, useState, useEffect } from "react";

export const CatalogoContext = createContext();

const CatalogoProvider = ({ children }) => {
const [catalogo, setCatalogo] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=ciencia+ficcion")
    .then(res => res.json())
    .then(data => {
        const items = data.items || [];
        const librosApi = items.map((item, i) => ({
        id: item.id || i,
        titulo: item.volumeInfo.title,
        descripcion: item.volumeInfo.description || "Sin descripción",
        categoria: "Fiction",
        imagen: item.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150",
        }));
        setCatalogo(librosApi);
        setLoading(false);
    })
    .catch(err => {
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