import React, { useContext, useState, useEffect } from "react";
import "./BlogPostCard.css";
import { myContext } from "../../context/data/myContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";

const BlogPostCard = () => {
  const context = useContext(myContext);
  const { getAllBlog } = context;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchBlogData = async () => {
      setTimeout(() => {
        setLoading(false);
      }, 1100);
    };

    fetchBlogData();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="blog-post-card-home">
          <div className="post-cards-home">
            {/* Card */}
            {getAllBlog && getAllBlog.length > 0 ? (
              <>
                {getAllBlog.map((item, index) => {
                  console.log(item);
                  const { thumbnail, date, title, description, category, id } =
                    item;
                  return (
                    <div
                      className="card-home"
                      key={id}
                      onClick={() => {
                        navigate(`/bloginfo/${id}`);
                      }}
                    >
                      {/* Thumbnail */}
                      <div className="post-thumbnail-home">
                        <img src={thumbnail} alt={"Blog - Image"} />
                        <div className="hover-effect">
                          <p>{category}</p>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="post-details-home">
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
      )}
    </>
  );
};

export default BlogPostCard;
