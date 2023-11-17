import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Buttons from "./Buttons";
import { v4 as uuidv4 } from "uuid";
import SearchProduct from "./SerchProduct";
import AddForm from "./AddForm";
import EditForm from "./EditForm";

const Products = ({ products, setProducts, setActive, user, setUser }) => {
  const [proName, setProName] = useState("");
  const [proPrice, setProPrice] = useState(0);
  const [formactive, setFormActive] = useState(false);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState(0);
  const [edit, setEdit] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      {!user.isAdmin ? (
        <>
          {console.log("admin deyil")}
          <button
            className="log-out"
            onClick={() => {
              setActive(true);
              navigate("/");
            }}
          >
            Log out
          </button>
          <AddForm
            proName={proName}
            setProName={setProName}
            proPrice={proPrice}
            setProPrice={setProPrice}
            products={products}
            setProducts={setProducts}
            formactive={formactive}
            setFormActive={setFormActive}
          />
          <SearchProduct products={products} setProducts={setProducts} />
          <table variant="sm">
            <thead>
              <>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Discounted</th>
                <th>UnitsInStock</th>
              </>
            </thead>
            <tbody>
              {products.map((product) => {
                let stock = product.unitsInStock < 10 ? true : false;
                let sale = product.sale ? true : false;
                if (stock) {
                  return (
                    <tr style={{ color: "red" }} key={uuidv4()}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.unitPrice}</td>
                      <td>{product.discontinued ? "true" : "false"}</td>
                      <td>{product.unitsInStock}</td>
                    </tr>
                  );
                } else if (sale) {
                  return (
                    <tr style={{ color: "green" }} key={uuidv4()}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.unitPrice}</td>
                      <td>{product.discontinued ? "true" : "false"}</td>
                      <td>{product.unitsInStock}</td>
                    </tr>
                  );
                } else {
                  return (
                    <tr key={uuidv4()}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.unitPrice}</td>
                      <td>{product.discontinued ? "true" : "false"}</td>
                      <td>{product.unitsInStock}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Discounted</th>
                <th>UnitsInStock</th>
              </tr>
            </tfoot>
          </table>
        </>
      ) : (
        <>
          <button
            className="log-out"
            onClick={() => {
              setActive(true);
            }}
          >
            Log out
          </button>
          <AddForm
            proName={proName}
            setProName={setProName}
            proPrice={proPrice}
            setProPrice={setProPrice}
            products={products}
            setProducts={setProducts}
            formactive={formactive}
            setFormActive={setFormActive}
          />
          <SearchProduct products={products} setProducts={setProducts} />
          <table variant="sm">
            <thead>
              <>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Discounted</th>
                <th>UnitsInStock</th>
                <th>Edit</th>
                <th>Delete</th>
              </>
            </thead>
            <tbody>
              {products.map((product) => {
                let stock = product.unitsInStock < 10 ? true : false;
                let sale = product.sale ? true : false;
                if (stock) {
                  return (
                    <tr style={{ color: "red" }} key={uuidv4()}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.unitPrice}</td>
                      <td>{product.discontinued ? "true" : "false"}</td>
                      <td>{product.unitsInStock}</td>
                      <Buttons
                        products={products}
                        setProducts={setProducts}
                        product={product}
                        edit={edit}
                        setEdit={setEdit}
                      />
                    </tr>
                  );
                } else if (sale) {
                  return (
                    <tr style={{ color: "green" }} key={uuidv4()}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.unitPrice}</td>
                      <td>{product.discontinued ? "true" : "false"}</td>
                      <td>{product.unitsInStock}</td>
                      <Buttons
                        products={products}
                        setProducts={setProducts}
                        product={product}
                        edit={edit}
                        setEdit={setEdit}
                      />
                    </tr>
                  );
                } else {
                  return (
                    <tr key={uuidv4()}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.unitPrice}</td>
                      <td>{product.discontinued ? "true" : "false"}</td>
                      <td>{product.unitsInStock}</td>
                      <Buttons
                        products={products}
                        setProducts={setProducts}
                        product={product}
                        edit={edit}
                        setEdit={setEdit}
                      />
                    </tr>
                  );
                }
              })}
            </tbody>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Discounted</th>
                <th>UnitsInStock</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </tfoot>
          </table>
          <EditForm
            edit={edit}
            editName={editName}
            editPrice={editPrice}
            setEditName={setEditName}
            setEditPrice={setEditPrice}
            products={products}
            setProducts={setProducts}
          />
        </>
      )}
    </>
  );
};

export default Products;
