import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home/index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/index.jsx";
import Layout from "./components/Layout/index.jsx";
import SingleMovie from "./components/SingleMovie/index.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";

const router = createBrowserRouter([ 
  { 
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/movie/:_id", element: <SingleMovie /> },
    ],
  }
], { basename: "/site" });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchProvider>
      <RouterProvider  router={router} />
    </SearchProvider>
  </React.StrictMode>
);
