import { createContext, useContext, useState, useEffect } from 'react';

// Create an AuthContext
const AuthContext = createContext();

// AuthProvider component
export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isActivated, setIsActivated] = useState(false); // New state for activation

    useEffect(() => {
        // Check localStorage for persisted login and activation status
        const storedAuth = localStorage.getItem('isAuthenticated') === 'true';
        const storedActivation = localStorage.getItem('isActivated') === 'true';
        setIsAuthenticated(storedAuth);
        setIsActivated(storedActivation);
    }, []);

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true'); // Persist authentication status
    };

    const logout = () => {
        setIsAuthenticated(false);
        setIsActivated(false); // Reset activation status on logout
        localStorage.removeItem('userProfile');
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('isActivated'); // Remove activation status from localStorage
    };

    const activateUser = () => {
        setIsActivated(true);
        localStorage.setItem('isActivated', 'true'); // Persist activation status
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, isActivated, login, logout, activateUser }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook to use the AuthContext
export function useAuth() {
    return useContext(AuthContext);
}
