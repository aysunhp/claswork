import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
const EditForm = ({
  edit,
  setEdit,
  products,
  setProducts,
  editName,
  editPrice,
  setEditName,
  setEditPrice,
}) => {
  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Edit name"
          className="search-input"
          onChange={(e) => {
            setEditName(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          className="search-input"
          placeholder="Edit price"
          onChange={(e) => {
            setEditPrice(e.target.value);
          }}
        />
        <br />
        <button
          className="edit-btn-table"
          onClick={(e) => {
            let edited = {
              name: editName,
              unitPrice: editPrice,
            };

            e.preventDefault();
            axios
              .put(
                "https://6556162184b36e3a431efcfa.mockapi.io/api/products/" +
                  edit.id,
                edited
              )
              .then((res) => {
                let arr = [...products];
                let idx;
                let editedProduct = arr.find((item) => item.id == res.data.id);
                products.forEach((item, i) => {
                  if (item.id == editedProduct.id) {
                    idx = i;
                  }
                });

                products[idx] = res.data;
                setProducts([...products]);
              });

            setEditName("");
            setEditPrice(0);
          }}
        >
          {" "}
          Edit
        </button>
      </form>
    </>
  );
};

export default EditForm;
