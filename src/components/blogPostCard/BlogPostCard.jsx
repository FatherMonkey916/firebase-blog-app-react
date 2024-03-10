import React, { useContext } from "react";
import "./BlogPostCard.css";
import { myContext } from "../../context/data/myContext";
import { useNavigate } from "react-router-dom";

const BlogPostCard = () => {
  const context = useContext(myContext);
  const { loading, getAllBlog } = context;
  // console.log(getAllBlog);

  const navigate = useNavigate();

  return (
    <div className="blog-post-card">
      <div className="post-cards">
        {/* Card */}
        {getAllBlog && getAllBlog.length > 0 ? (
          <>
            {getAllBlog.map((item, index) => {
              console.log(item);
              const { thumbnail, date, title, description, id } = item;
              return (
                <div className="card" key={index}>
                  {/* Thumbnail */}
                  <div className="post-thumbnail">
                    <img src={thumbnail} alt={"Blog - Image"} />
                  </div>

                  {/* Details */}
                  <div
                    className="post-details"
                    onClick={() => {
                      navigate(`/bloginfo/:id${id}`);
                    }}
                  >
                    {/* Date */}
                    <p>{date}</p>
                    {/* Title */}
                    <h3>{title}</h3>
                    {/* Description */}
                    <p>{description}</p>
                  </div>
                </div>
              );
            })}{" "}
          </>
        ) : (
          <h1>Not Found🙁</h1>
        )}
      </div>
      {/* See More Button */}
      <div className="see-more-btn">
        <button>See More</button>
      </div>
    </div>
  );
};

export default BlogPostCard;
