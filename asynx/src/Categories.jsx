import axios from "axios";
import React from "react";

import { useEffect, useState } from "react";
import Form from "./Form";
import Category from "./Category";

function Categories() {
  let [category, setCategory] = useState([]);
  let [name, setName] = useState("");
  let [desc, setDesc] = useState("");

  useEffect(() => {
    axios
      .get("https://6554db7663cafc694fe71da6.mockapi.io/category/category")
      .then((res) => {
        setCategory(res.data);
      });
  }, []);

  return (
    <>
      <ul>{<Category category={category} setCategory={setCategory} />}</ul>
      <Form
        name={name}
        setName={setName}
        setDesc={setDesc}
        desc={desc}
        category={category}
        setCategory={setCategory}
      />
    </>
  );
}

export default Categories;
