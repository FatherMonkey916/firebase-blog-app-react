import React, { useContext } from "react";
import "./BlogPostCard.css";
import { myContext } from "../../context/data/myContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const BlogPostCard = () => {
  const context = useContext(myContext);
  const { getAllBlog } = context;
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
                <div
                  className="card"
                  key={id}
                  onClick={() => {
                    navigate(`/bloginfo/${id}`);
                  }}
                >
                  {/* Thumbnail */}
                  <div className="post-thumbnail">
                    <img src={thumbnail} alt={"Blog - Image"} />
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
            })}{" "}
          </>
        ) : (
          <h1>
            No Blogs to Show!🙁
            <br />
            <span>Please add some blog</span>
          </h1>
        )}
      </div>
      {/* See More Button */}
      <div className="see-more-btn">
        <Link to={"/allblogs"}>
          <button>See More</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
