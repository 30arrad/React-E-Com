import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./router/App.jsx";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Card from "./Components/Card.jsx";
import Watchlist from "./Components/Watchlist.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <App /> },
      {
        path: "/card",
        element: <Card />,
      },
      ,
      {
        path: "/watchlist",
        element: <Watchlist />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
