import React, { useContext } from "react";
import { nameContext } from "../context/nameContext";

function Componet1(props) {
  const { age } = useContext(nameContext);
  console.log(name);
  return (
    <div>
      <h3>Hello my name is {age} </h3>
    </div>
  );
}

export default Componet1;
