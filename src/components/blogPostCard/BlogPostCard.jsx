import React from "react";
import "./BlogPostCard.css";

const BlogPostCard = () => {
  return (
    <div className="blog-post-card">
      <div className="post-cards">
        {/* Card 1 */}
        <div className="card">
          {/* Thumbnail */}
          <div className="post-thumbnail">
            <img
              src="https://www.invajy.com/wp-content/uploads/2022/11/Into-the-Wild-Quotes-3.jpeg"
              alt="Into the wild movie - quote"
            />
          </div>

          {/* Details */}
          <div className="post-details">
            {/* Date */}
            <p>09-03-2024</p>
            {/* Title */}
            <h3>Into The Wild</h3>
            {/* Description */}
            <p>
              Christopher McCandless: When you want something in life, you just
              gotta reach out and grab it.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          {/* Thumbnail */}
          <div className="post-thumbnail">
            <img
              src="https://www.invajy.com/wp-content/uploads/2022/11/Into-the-Wild-Quotes-1-600x441.jpeg"
              alt="Into the wild movie - quote"
            />
          </div>

          {/* Details */}
          <div className="post-details">
            {/* Date */}
            <p>04-03-2024</p>
            {/* Title */}
            <h3>Christopher McCandless</h3>
            {/* Description */}
            <p>
              “People just need to change the way they look at things.” ~
              Christopher McCandless, “Into The Wild”
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          {/* Thumbnail */}
          <div className="post-thumbnail">
            <img
              src="https://www.invajy.com/wp-content/uploads/2022/11/Into-the-Wild-Quotes-2-600x397.jpeg"
              alt="Into the wild movie - quote"
            />
          </div>

          {/* Details */}
          <div className="post-details">
            {/* Date */}
            <p>08-03-2024</p>
            {/* Title */}
            <h3>Christopher McCandless</h3>
            {/* Description */}
            <p>
              “Happiness is only real when shared.” ~ Christopher McCandless,
              “Into The Wild”
            </p>
          </div>
        </div>
      </div>
      {/* See More Button */}
      <div className="see-more-btn">
        <button>See More</button>
      </div>
    </div>
  );
};

export default BlogPostCard;
