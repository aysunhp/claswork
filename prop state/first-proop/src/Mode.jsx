import React from "react";
import { useState } from "react";

function Mode() {
  let white = "#fff";
  let black = "#000";
  const [bgColor, setBgColor] = useState(white);
  return (
    <>
      <button
        onClick={() => {
          setBgColor(black);
        }}
        style={{ background: bgColor }}
      >
        Change mode
      </button>
    </>
  );
}

export default Mode;
