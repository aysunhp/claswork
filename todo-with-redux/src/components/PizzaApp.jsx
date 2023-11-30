import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  addIngridient,
  toggleGluten,
  deleteIngridient,
} from "../../redux/slices/PizzaSlices";
import { useDispatch, useSelector } from "react-redux";
const PizzaApp = () => {
  const pizza = useSelector((state) => state.pizza.ingridients);
  const gluten = useSelector((state) => state.pizza.gluten);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const addable = ["olives", "pepperonie", "anchovies", "mushroom"];
  return (
    <>
      <h1>Pizza</h1>
      <div>Gluten: {gluten ? "true" : "false"}</div>
      <ul>
        {pizza &&
          pizza.map((elem) => {
            return (
              <li key={elem.id}>
                {elem.tittle}{" "}
                <button
                  id={elem.id}
                  onClick={() => {
                    dispatch(deleteIngridient(elem.id));
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>

      <input type="text" ref={inputRef} />

      <button
        onClick={() => {
          console.log(inputRef.current.value);
          if (addable.includes(inputRef.current.value)) {
            let found = pizza.find(
              (elem) =>
                elem.tittle.toLowerCase() ==
                inputRef.current.value.toLowerCase()
            );
            console.log(found);
            if (!found) {
              dispatch(addIngridient(inputRef.current.value));
              inputRef.current.value = "";
            }
          }
        }}
      >
        Add
      </button>

      <button
        onClick={() => {
          dispatch(toggleGluten());
        }}
      >
        Toggle Gluten
      </button>
    </>
  );
};

export default PizzaApp;
