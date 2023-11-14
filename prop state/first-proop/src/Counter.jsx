import React from "react";
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Decrease</button>
      <span>{count}</span>
      <button
        onClick={() => {
          count > 0 ? setCount(count - 1) : setCount(0);
        }}
      >
        Increase
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default Counter;
