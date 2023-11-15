import React from "react";
import axios from "axios";

function Form({ name, desc, setName, setDesc, setCategory, category }) {
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        value={name}
        placeholder="category name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        value={desc}
        placeholder="category description"
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <button
        className="form-add"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          let obj = {
            name: name,
            description: desc,
          };
          setName("");
          setDesc("");
          axios
            .post(
              "https://6554db7663cafc694fe71da6.mockapi.io/category/category",
              obj
            )
            .then((res) => {
              setCategory([...category, res.data]);
            });
        }}
      >
        add
      </button>
    </form>
  );
}

export default Form;
