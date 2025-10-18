import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../helpers/auth";
import { useUsuario } from "../context/UsuarioContext";

const Login = () => {
const navigate = useNavigate();
const { setUsuario } = useUsuario();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    const json = await res.json();

    if (!res.ok) throw new Error(json.message || "Credenciales inválidas");

    const { token, user } = json.data;
    setToken(token);
    setUsuario({ ...user, registrado: true });
    navigate("/home");
    } catch (err) {
    setError(err.message);
    }
};

return (
    <div className="container mt-5">
    <h2 className="mb-4 text-center">Login</h2>
    {error && <div className="alert alert-danger">{error}</div>}
    <form onSubmit={handleLogin} style={{ maxWidth: "400px", margin: "0 auto" }}>
        <div className="mb-3">
        <label>Email</label>
        <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        </div>
        <div className="mb-3">
        <label>Contraseña</label>
        <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        </div>
        <button type="submit" className="btn btn-primary w-100">
        Ingresar
        </button>
    </form>
    </div>
);
};

export default Login;