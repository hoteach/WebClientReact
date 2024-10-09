import { Navigate } from "react-router-dom";
import { useAuth } from './AuthContext'; // Import useAuth hook

export function UnauthenticatedRoute({ children }) {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        // Redirect authenticated users to the dashboard (or any other page)
        return <Navigate to="/dashboard" />;
    }

    return children; // Render the unprotected component (e.g., login page)
}
