import React, { useState } from "react";
import "./CreateBlog.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { IoMdImages } from "react-icons/io";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { fireDb, storage } from "../../../firebase/FirebaseConfig";

const CreateBlog = () => {
  const [thumbnailPreview, setThumbnailPreview] = useState("");

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setThumbnailPreview(reader.result);
  //       setBlogs({ ...blogs, thumbnail: reader.result });
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnailPreview(URL.createObjectURL(file));
      setBlogs({ ...blogs, thumbnail: file });
    }
  };

  const navigate = useNavigate();

  // Create Blog
  const [blogs, setBlogs] = useState({
    title: "",
    content: "",
    description: "",
    time: Timestamp.now(),
  });

  // Add Post
  const addPost = async () => {
    if (
      blogs.title === "" ||
      blogs.content === "" ||
      blogs.description === "" ||
      blogs.thumbnail === ""
    ) {
      toast.error("Please Fill All Fields");
    }
    uploadImage();
  };

  // Upload Image
  const uploadImage = async () => {
    if (!thumbnailPreview) {
      toast.error("Please upload a thumbnail image");
      return;
    }

    const imageRef = ref(
      storage,
      `blogimage/${blogs.title}.${blogs.thumbnail.type.split("/")[1]}`
    );
    uploadBytes(imageRef, blogs.thumbnail).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        const productRef = collection(fireDb, "blogPost");
        try {
          addDoc(productRef, {
            ...blogs,
            thumbnail: url,
            time: Timestamp.now(),
            date: new Date().toLocaleString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }),
          });
          navigate("/dashboard");
          toast.success("Post Added Successfully");
        } catch (error) {
          toast.error(error);
          console.log(error);
        }
      });
    });
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
              name="thumbnail"
              className="thumbnail-input"
              onChange={handleFileChange}
            />
          </label>
          <input
            type="text"
            className="title-input"
            placeholder="Enter Your Title"
            value={blogs.title}
            onChange={(e) => setBlogs({ ...blogs, title: e.target.value })}
          />
          <textarea
            className="description-input"
            rows="6"
            placeholder="Enter Your Description"
            value={blogs.description}
            onChange={(e) =>
              setBlogs({ ...blogs, description: e.target.value })
            }
          />
          <button onClick={addPost} className="submit-button">
            Create Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
