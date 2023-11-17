import React, { useState } from "react";
import axios from "axios";

const Buttons = ({ product, products, setProducts, edit, setEdit }) => {
  return (
    <>
      <td>
        <button
          className="edit-btn"
          id={product.id}
          onClick={() => {
            setEdit(product);
          }}
        >
          Edit
        </button>
      </td>
      <td>
        <button
          className="delete-btn"
          id={product.id}
          onClick={(e) => {
            console.log(e.target.getAttribute("id"));
            let founds = [...products];
            founds = products.filter(
              (product) => product.id != e.target.getAttribute("id")
            );
            setProducts(founds);
            axios.delete(
              "https://6556162184b36e3a431efcfa.mockapi.io/api/products/" +
                e.target.getAttribute("id")
            );
          }}
        >
          Delete
        </button>
      </td>

      {edit ? (
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            let found = products.find((item) => item.id == product.id);
            axios.patch(
              "https://6556162184b36e3a431efcfa.mockapi.io/api/products" +
                product.id
            );

            found.name = edit.name;
            found.unitPrice = edit.unitPrice;
            setProducts(...products);
            setEdit(null);
          }}
        >
          <input
            type="text"
            value={edit.name}
            placeholder="Edit product name"
            onChange={() => {
              setEdit({ ...edit, name: e.target.value });
            }}
          />
          <input
            type="number"
            value={edit.unitPrice}
            placeholder="Edit product price"
            onChange={() => {
              setEdit({ ...edit, unitPrice: e.target.value });
            }}
          />
        </form>
      ) : null}
    </>
  );
};

export default Buttons;
