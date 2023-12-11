import React from "react";
import { getAllProducts } from "../../redux/slices/Products";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Products = () => {
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  const suppliers = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={dispatch(getAllProducts())}>Get suppliers</button>
      <ul>
        {suppliers &&
          suppliers.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
      </ul>
    </>
  );
};

export default Products;
