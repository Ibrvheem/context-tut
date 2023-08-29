import React, { useContext } from "react";
import { nameContext } from "../context/nameContext";

function Component2() {
  const { name } = useContext(nameContext);

  return (
    <div>
      <h2> {name} is 10 years old</h2>
    </div>
  );
}

export default Component2;
