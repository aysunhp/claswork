import React from "react";
import axios from "axios";

const AddForm = ({
  proName,
  setProName,
  proPrice,
  setProPrice,
  products,
  setProducts,
  formactive,
  setFormActive,
}) => {
  return (
    <>
      <button
        className="add-product"
        onClick={() => {
          setFormActive(!formactive);
        }}
      >
        Add New Product
      </button>
      {formactive ? (
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            className="form-inp"
            placeholder="Enter product name"
            value={proName}
            onChange={(e) => {
              setProName(e.target.value);
            }}
          />
          <input
            type="number"
            className="form-inp"
            placeholder="Enter product price"
            value={proPrice}
            onChange={(e) => {
              setProPrice(e.target.value);
            }}
          />
          <br />
          <button
            className="add-btn"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              let obj = {
                name: proName,
                unitPrice: proPrice,
              };

              setProName("");
              setProPrice(0);
              axios
                .post(
                  "https://6556162184b36e3a431efcfa.mockapi.io/api/products",
                  obj
                )
                .then((res) => {
                  setProducts([...products, res.data]);
                });
            }}
          >
            Add
          </button>
        </form>
      ) : null}
    </>
  );
};

export default AddForm;
