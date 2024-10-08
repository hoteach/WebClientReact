import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Funnel from "./pages/funnel/Funnel";
import Landing from "./pages/landing/Landing";
import Dashboard from "./pages/dashboard/Dashboard";
import Roadmap from "./pages/resources/Roadmap";
import Steps from "./pages/resources/CompletionSteps";
import ActivationLayout from "./pages/layout/ActivationLaout";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { UnauthenticatedRoute } from "./pages/UnauthenticatedRoute";
import { AuthProvider } from "./pages/AuthContext";

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
            { path: "funnel", element: <Funnel /> },
            { 
              path: "login", 
              element: 
                <UnauthenticatedRoute>
                  <Landing />
                </UnauthenticatedRoute>
            }, // Unprotected routes
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
