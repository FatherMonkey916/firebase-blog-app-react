import React, { useContext, useEffect, useState } from "react";
import "./BlogInfo.css";
import Navbar from "../../components/navbar/Navbar";
import Logo from "../../assets/logo.png";
import { myContext } from "../../context/data/myContext";
import { doc, getDoc } from "firebase/firestore";
import { fireDb } from "../../firebase/FirebaseConfig";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";

const BlogInfo = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const params = useParams();

  //* getBlogs State
  const [getBlog, setGetBlog] = useState();

  const getAllBlogs = async () => {
    setLoading(true);
    try {
      const productRef = doc(fireDb, "blogPost", params.id);
      const productTemp = await getDoc(productRef);
      if (productTemp.exists()) {
        setGetBlog(productTemp.data());
      } else {
        console.log("Document does not exist");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, [params.id]);

  console.log(getBlog);

  return (
    <>
      <Navbar />
      <div className="blog-info">
        <div className="blog-info-container">
          {loading ? (
            <Loader />
          ) : getBlog ? (
            <div className="custom-card">
              {/* Thumbnail */}
              <div className="custom-post-thumbnail">
                <div className="thumbnail-img">
                  <img src={getBlog.thumbnail} alt={getBlog.title} />
                </div>
              </div>

              {/* Details */}
              <div className="custom-post-details">
                <div className="post-detail-text">
                  {/* Title */}
                  <h3>{getBlog.title}</h3>
                  {/* Description */}
                  <p>{getBlog.description}</p>
                </div>

                {/* Date and Logo */}
                <div className="date-logo">
                  {/* Date */}
                  <div className="custom-date">
                    <p>{getBlog.date}</p>
                  </div>
                  {/* Logo */}
                  <div className="custom-logo">
                    <img src={Logo} alt="Logo" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>Blog not found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogInfo;
