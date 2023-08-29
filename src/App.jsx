import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Componet1 from "./components/Componet1";
import Component2 from "./components/Component2";
import NameProvider from "./context/nameContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NameProvider>
        <Componet1 />
        <Component2 />
      </NameProvider>
    </>
  );
}

export default App;
