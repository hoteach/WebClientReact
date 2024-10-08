import { createContext, useContext, useState } from 'react';

// Create an AuthContext
const AuthContext = createContext();

// AuthProvider component
export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
        // Optionally, save the login status in localStorage
        localStorage.setItem('isAuthenticated', 'true');
    };

    const logout = () => {
        setIsAuthenticated(false);
        // Optionally, remove the login status from localStorage
        localStorage.removeItem('isAuthenticated');
    };

    const isUserAuthenticated = () => {
        // Check localStorage or token for persisted login status
        return localStorage.getItem('isAuthenticated') === 'true';
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated: isUserAuthenticated(), login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook to use the AuthContext
export function useAuth() {
    return useContext(AuthContext);
}
