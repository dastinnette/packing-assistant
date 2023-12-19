import React from "react";
import App from "./components/App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./components/HomePage";
import LocationsPage from "./components/LocationsPage";
import LocationPage from "./components/LocationPage";

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <div>Error in app!</div>,
        children: [
            {index: true, element: <HomePage/>},
            {
                path: '/locations',
                element: <LocationsPage />
            },
            {
                path: '/locations/:locationId',
                element: <LocationPage />,
            },
        ],
    },
];

const router = createBrowserRouter(routes);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router}/>);
