import { createContext, useState } from "react";

const myContext = createContext();

const MyContextProvider = ({ children }) => {
  const [allBlog, setAllBlog] = useState([]);

  return (
    <myContext.Provider value={{ allBlog, setAllBlog }}>
      {children}
    </myContext.Provider>
  );
};

export { myContext, MyContextProvider };
