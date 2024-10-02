import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Layout from "./pages/layout/Layout";
import Funnel from "./pages/funnel/Funnel";
import Landing from "./pages/landing/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "funnel", element: <Funnel /> },
      { path: "landing", element: <Landing /> },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;