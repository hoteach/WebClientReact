import { Navigate } from "react-router-dom";
import { useAuth } from './AuthContext';

export function ProtectedRoute({ children }) {
    const { isAuthenticated, isActivated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    /*if (!isActivated) {
        return <Navigate to="/activation" />;
    }*/

    return children;
}
