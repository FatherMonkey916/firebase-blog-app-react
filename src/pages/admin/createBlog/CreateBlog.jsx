import React, { useState } from "react";
import "./CreateBlog.css";
import { IoArrowBackOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
import { IoMdImages } from "react-icons/io";

const CreateBlog = () => {
  const [thumbnailPreview, setThumbnailPreview] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="create-blog">
      <div className="create-blog-container">
        <div className="header">
          <div className="back-button">
            <Link to={"/dashboard"}>
              <IoArrowBackOutline size={20} className="back-icon" />
            </Link>
          </div>
          <h4 className="title">Create blog</h4>
        </div>
        <div className="content">
          {thumbnailPreview && (
            <img
              className="thumbnail-preview"
              src={thumbnailPreview}
              alt="Thumbnail Preview"
            />
          )}
          <label className="upload-label">
            Upload Thumbnail <IoMdImages className="custom-icon" size={20} />
            <input
              type="file"
              className="thumbnail-input"
              onChange={handleFileChange}
            />
          </label>
          <input
            type="text"
            className="title-input"
            placeholder="Enter Your Title"
          />
          <textarea
            className="description-input"
            rows="6"
            placeholder="Enter Your Description"
          />
          <button className="submit-button">Create Blog</button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
