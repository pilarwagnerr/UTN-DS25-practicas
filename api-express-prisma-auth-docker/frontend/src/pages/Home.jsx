import { useEffect, useState } from "react";
import { authHeader } from "../helpers/auth";

const Home = () => {
const [data, setData] = useState(null);

useEffect(() => {
    const fetchData = async () => {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/users`, {
        headers: {
            "Content-Type": "application/json",
            ...authHeader(),
        },
        });
        const json = await res.json();
        setData(json);
    } catch (err) {
        console.error(err);
    }
    };
    fetchData();
}, []);

return (
    <div className="container mt-5">
    <h2>Ruta Segura: Usuarios</h2>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
);
};

export default Home;