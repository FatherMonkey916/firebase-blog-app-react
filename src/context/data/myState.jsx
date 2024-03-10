import React, { useEffect, useState } from "react";
import { myContext } from "./myContext";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { fireDb } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";

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
        console.log(blogArray);
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

  // Blog Delete Function
  const deleteBlogs = async (id) => {
    try {
      await deleteDoc(doc(fireDb, "blogPost", id));
      getAllBlogs();
      toast.success("Blog deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <myContext.Provider
      value={{
        loading,
        setLoading,
        getAllBlog,
        deleteBlogs,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};

export default MyState;
