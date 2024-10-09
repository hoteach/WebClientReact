import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Funnel from "./pages/funnel/Funnel";
import Dashboard from "./pages/dashboard/Dashboard";
import Roadmap from "./pages/resources/Roadmap";
import Steps from "./pages/resources/CompletionSteps";
import ActivationLayout from "./pages/layout/ActivationLaout";
import { ProtectedRoute } from "./pages/contextAndRoute/ProtectedRoute";
import { UnauthenticatedRoute } from "./pages/contextAndRoute/UnauthenticatedRoute";
import ActivationPage from "./pages/unauthorisedPages/ActivationPage";
import Login from "./pages/unauthorisedPages/Login";
import { AuthProvider } from "./pages/contextAndRoute/AuthContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
          <ProtectedRoute>
              <Layout />
          </ProtectedRoute>
        ),
        children: [
            {
                path: "dashboard",
                element: (
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                )
            },
            {
                path: "steps",
                element: (
                    <ProtectedRoute>
                        <Steps />
                    </ProtectedRoute>
                )
            },
            {
                path: "roadmap",
                element: (
                    <ProtectedRoute>
                        <Roadmap />
                    </ProtectedRoute>
                )
            }
        ]
    },
    {
        path: "/",
        element: <ActivationLayout />,
        children: [
            { 
                path: "/activate/:id", 
                element: 
                    <UnauthenticatedRoute>
                    <ActivationPage />
                    </UnauthenticatedRoute>
            },
            { 
                path: "funnel", 
                element: 
                    <UnauthenticatedRoute>
                    <Funnel />
                    </UnauthenticatedRoute>
            },
            { 
                path: "login", 
                element: 
                    <UnauthenticatedRoute>
                    <Login />
                    </UnauthenticatedRoute>
            },
        ],
    },
]);

function App() {
    return (
        <AuthProvider> {/* Wrap the app with AuthProvider */}
            <RouterProvider router={router} />
        </AuthProvider>
    );
}

export default App;
