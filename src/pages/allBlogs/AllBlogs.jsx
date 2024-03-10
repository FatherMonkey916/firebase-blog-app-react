import React, { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./AllBlogs.css";
import { myContext } from "../../context/data/myContext";
import { useNavigate } from "react-router-dom";

const AllBlogs = () => {
  const context = useContext(myContext);
  const { getAllBlog } = context;

  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* All Blogs */}
      <div className="all-blogs-container">
        <div className="all-blogs">
          {/* Title */}
          <div className="title">
            <h2>All Blogs</h2>
          </div>

          {/* Blog Cards */}
          <div className="post-cards">
            {/* Card */}
            {getAllBlog.length > 0 ? (
              <>
                {getAllBlog.map((item, index) => {
                  console.log(item);
                  const { thumbnail, date, title, description, id } = item;
                  return (
                    <div
                      key={index}
                      className="card"
                      onClick={() => {
                        navigate(`/bloginfo/${id}`);
                      }}
                    >
                      {/* Thumbnail */}
                      <div className="post-thumbnail">
                        <img src={thumbnail} alt={title} />
                      </div>

                      {/* Details */}
                      <div className="post-details">
                        {/* Date */}
                        <p>{date}</p>
                        {/* Title */}
                        <h3>{title}</h3>
                        {/* Description */}
                        <p>{description}</p>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <h1>Not Found 🙁</h1>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBlogs;
