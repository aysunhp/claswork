import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import React from "react";
import Navbar from "./components/Navbar";

// console.log(routes);
const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
}

export default App;
