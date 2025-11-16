import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../helpers/auth";

export function PrivateRoute({ children }) {
if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
}
return children;
}