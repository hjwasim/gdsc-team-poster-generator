import React, { useState, createContext, useRef } from "react";

export const Context = createContext();

const Provider = (props) => {
  const my_dom_ref = useRef(null);
  const [name, setName] = useState("Hjwasim");
  const [role, setRole] = useState("Developer");
  const [img, setImg] = useState(null);
  
  return (
    <Context.Provider value={{ setName, name, role, setRole, img, setImg,my_dom_ref }}>
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
