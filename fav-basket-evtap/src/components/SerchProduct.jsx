import React from "react";

const SearchProduct = ({ products, setProducts }) => {
  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="search-input"
          type="text"
          placeholder="Search product"
          onKeyUp={(e) => {
            let founds = products.filter((product) =>
              product.name.toLowerCase().includes(e.target.value)
            );
            setProducts(founds);
          }}
        />
      </form>
    </>
  );
};

export default SearchProduct;
