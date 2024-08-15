import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";

export default function RouteGuard() {
    const { isAuthenticated } = useAuthContext();

    return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />;
}
