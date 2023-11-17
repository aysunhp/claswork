import React from "react";
import { Navigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import axios from "axios";
import Login from "./Login";
import Products from "./Products";
import Register from "./Register";

const Userpage = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(false);
  const [rname, setRName] = useState("");
  const [rpass, setRPass] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState(true);
  const [user, setUser] = useState([]);
  const aysun = useRef();

  useEffect(() => {
    axios
      .get("https://6556162184b36e3a431efcfa.mockapi.io/api/users")
      .then((res) => {
        setUsers(res.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://6556162184b36e3a431efcfa.mockapi.io/api/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Login
                  setName={setName}
                  setPass={setPass}
                  setActive={setActive}
                  name={name}
                  pass={pass}
                  active={active}
                  setRName={setRName}
                  setRPass={setRPass}
                  setEmail={setEmail}
                  setAdmin={setAdmin}
                  rname={rname}
                  rpass={rpass}
                  email={email}
                  aysun={aysun}
                  setUser={setUser}
                />
              }
            />
            <Route
              path="blogs"
              element={
                <Products
                  products={products}
                  setProducts={setProducts}
                  setActive={setActive}
                  user={user}
                  setUser={setUser}
                />
              }
            />
            <Route path="contact" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* {!active ? (
        <Products
          products={products}
          setProducts={setProducts}
          setActive={setActive}
          user={user}
          setUser={setUser}
        />
      ) : (
        <Login
          setName={setName}
          setPass={setPass}
          setActive={setActive}
          name={name}
          pass={pass}
          active={active}
          setRName={setRName}
          setRPass={setRPass}
          setEmail={setEmail}
          setAdmin={setAdmin}
          rname={rname}
          rpass={rpass}
          email={email}
          aysun={aysun}
          setUser={setUser}
        />
      )} */}
    </>
  );
};

export default Userpage;
{
}
