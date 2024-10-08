import { Navigate } from "react-router-dom";
import { useAuth } from './AuthContext'; // Import useAuth hook

export function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        // Redirect to login page if the user is not authenticated
        return <Navigate to="/login" />;
    }

    return children; // Render the protected component if authenticated
}
