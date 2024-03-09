import React, { useEffect, useState } from "react";
import { myContext, MyContextProvider } from "./myContext";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { fireDb } from "../../firebase/FirebaseConfig";

const MyState = (props) => {
  // loading state
  const [loading, setLoading] = useState(false);
  // getAllBlog State
  const [getAllBlog, setGetAllBlog] = useState([]);

  // getAllBlog Function
  const getAllBlogs = () => {
    setLoading(true);
    try {
      const q = query(collection(fireDb, "blogPost"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let blogArray = [];
        QuerySnapshot.forEach((doc) => {
          blogArray.push({ ...doc.data(), id: doc.id });
        });

        setGetAllBlog(blogArray);
        console.log(productsArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <myContext.Provider
      value={{
        loading,
        setLoading,
        getAllBlog,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};

export default MyState;
