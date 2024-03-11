import React, { useEffect, useState } from "react";
import "./UpdateBlog.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoMdImages } from "react-icons/io";
import { Timestamp, doc, getDoc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { fireDb, storage } from "../../../firebase/FirebaseConfig";

import { Link, useParams, useNavigate } from "react-router-dom";

const UpdateBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState({
    title: "",
    category: "",
    description: "",
    thumbnail: "",
  });
  const [thumbnailPreview, setThumbnailPreview] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      const blogRef = doc(fireDb, "blogPost", id);
      const docSnap = await getDoc(blogRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setBlogs(data);
        setThumbnailPreview(data.thumbnail);
      } else {
        console.log("No such document!");
      }
    };

    fetchBlog();
  }, [id]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnailPreview(URL.createObjectURL(file));
      setBlogs({ ...blogs, thumbnail: file });
    }
  };

  const updatePost = async () => {
    if (
      blogs.title === "" ||
      blogs.category === "" ||
      blogs.description === "" ||
      blogs.thumbnail === ""
    ) {
      toast.error("Please Fill All Fields");
      return;
    }

    if (!thumbnailPreview) {
      toast.error("Please upload a thumbnail image");
      return;
    }

    // Upload image
    const imageRef = ref(
      storage,
      `blogimage/${blogs.title}.${blogs.thumbnail.type.split("/")[1]}`
    );
    uploadBytes(imageRef, blogs.thumbnail).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        // Update document
        const blogRef = doc(fireDb, "blogPost", id);
        updateDoc(blogRef, {
          ...blogs,
          thumbnail: url,
        })
          .then(() => {
            navigate("/dashboard");
            toast.success("Post Updated Successfully");
          })
          .catch((error) => {
            toast.error("Error updating post: ", error);
          });
      });
    });
  };

  return (
    <div className="update-blog">
      <div className="update-blog-container">
        <div className="update-blog-header">
          <div className="update-blog-back-button">
            <Link to={"/dashboard"}>
              <IoArrowBackOutline size={20} className="update-blog-back-icon" />
            </Link>
          </div>
          <h4 className="update-blog-title">Update Blog</h4>
        </div>
        <div className="update-blog-content">
          {thumbnailPreview && (
            <img
              className="update-blog-thumbnail-preview"
              src={thumbnailPreview}
              alt="Thumbnail Preview"
            />
          )}
          <label className="update-blog-upload-label">
            Upload Thumbnail{" "}
            <IoMdImages className="update-blog-custom-icon" size={20} />
            <input
              type="file"
              name="thumbnail"
              className="update-blog-thumbnail-input"
              onChange={handleFileChange}
            />
          </label>
          {/* Title */}
          <input
            type="text"
            className="update-blog-title-input"
            placeholder="Enter Your Title"
            value={blogs.title}
            onChange={(e) => setBlogs({ ...blogs, title: e.target.value })}
          />
          {/* Category */}
          <input
            type="text"
            className="update-blog-category-input"
            placeholder="Enter Your category"
            value={blogs.category}
            onChange={(e) => setBlogs({ ...blogs, category: e.target.value })}
          />
          {/* Description */}
          <textarea
            className="update-blog-description-input"
            rows="6"
            placeholder="Enter Your Description"
            value={blogs.description}
            onChange={(e) =>
              setBlogs({ ...blogs, description: e.target.value })
            }
          />
          {/* Submit */}
          <button onClick={updatePost} className="update-blog-submit-button">
            Update Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;
