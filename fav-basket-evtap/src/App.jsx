import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userpage from "./components/Userpage";
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/Products";
import Layout from "./components/Layout";
function App() {
  return (
    <>
      <Userpage />
    </>
  );
}

export default App;
