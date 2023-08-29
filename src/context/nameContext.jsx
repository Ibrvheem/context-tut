import { createContext, useState } from "react";

export const nameContext = createContext();
export default function NameProvider({ children }) {
  const [name, setName] = useState("Ibrahim");
  const [age, setAge] = useState(12);
  return <nameContext.Provider value={{ name, age }}>{children}</nameContext.Provider>;
}
