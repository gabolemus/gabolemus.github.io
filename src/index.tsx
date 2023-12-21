import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./sass/styles.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
