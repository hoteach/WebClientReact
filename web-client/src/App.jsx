import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Layout from "./pages/layout/Layout";
import Funnel from "./pages/funnel/Funnel";
import Landing from "./pages/landing/Landing";
import Dashboard from "./pages/dashboard/Dashboard";
import ActivationLayout from "./pages/layout/ActivationLaout";
import Roadmap from "./pages/resources/Roadmap";
import Steps from "./pages/resources/CompletionSteps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "steps", element: <Steps /> },
      { path: "roadmap", element: <Roadmap /> },
    ]
  },
  {
    path: "/",
    element: <ActivationLayout />,
    children: [
      { path: "funnel", element: <Funnel /> },
      { path: "landing", element: <Landing /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;