import React from "react";
import { PropTypes } from "prop-types";

function Hello({ name, surname, age, hobbies }) {
  return (
    <>
      <h3>
        Hello {name} {surname}, {age}
      </h3>
      <ul>
        {hobbies.map((hobby, i) => {
          return <li key={i}>{hobby}</li>;
        })}
      </ul>
    </>
  );
}

Hello.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  age: PropTypes.number,
  hobbies: PropTypes.array,
};
export default Hello;
