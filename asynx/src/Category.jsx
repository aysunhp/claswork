import React from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function Category({ category, setCategory }) {
  return category.map((item) => {
    return (
      <li key={uuidv4()}>
        {item.name}{" "}
        <button
          className="edit"
          id={item.id}
          onClick={(e) => {
            let arr = [...category];
            let item = arr.find((x) => x.id == e.target.getAttribute("id"));
            axios.patch(
              "https://6554db7663cafc694fe71da6.mockapi.io/category/category/" +
                e.target.getAttribute("id")
            );
          }}
        >
          edit
        </button>
        <button
          className="delete"
          id={item.id}
          onClick={(e) => {
            console.log(e.target.getAttribute("id"));
            let arr = [...category];
            arr = arr.filter((elem) => elem.id != e.target.getAttribute("id"));
            setCategory(arr);
            axios.delete(
              "https://6554db7663cafc694fe71da6.mockapi.io/category/category/" +
                e.target.getAttribute("id")
            );
          }}
        >
          delete
        </button>
      </li>
    );
  });
}

export default Category;
