import React, { useContext } from "react";
import "./Dashboard.css";
import Navbar from "../../../components/navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "../../../context/data/myContext";

const Dashboard = () => {
  const context = useContext(myContext);
  const { getAllBlog } = context;
  console.log(getAllBlog);

  const navigate = useNavigate();

  //* Logout Function
  const logout = () => {
    localStorage.clear("admin");
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        {/* User Details */}
        <div className="user-details">
          <div className="left">
            {/* User Profile */}
            <div className="user-profile">
              <img
                src="https://media.licdn.com/dms/image/D5603AQFTO6H1GfGZJg/profile-displayphoto-shrink_400_400/0/1703827335820?e=1715212800&v=beta&t=vIn0NHoVDupU11X6kSEPPHhz6JDIEktaJxOq4DR_OCY"
                alt="User Profile"
              />
            </div>
          </div>
          <div className="right">
            {/* User Details */}
            <div className="user-info">
              <h2>John Doe</h2>
              <p>
                Position: <span>Web Developer</span>
              </p>
              <p>
                No of Blogs: <span>10</span>
              </p>
            </div>
            {/* Buttons */}
            <div className="buttons">
              <Link to={"/createblog"}>
                <button>Create Blog</button>
              </Link>
              <button onClick={logout}>Logout</button>
            </div>
          </div>
        </div>

        {/* Table of Blogs */}
        <div className="container">
          <div className="table-wrapper">
            {/* table  */}
            <table>
              <thead>
                <tr>
                  <th className="custom-th">S.No</th>
                  <th className="custom-th">Thumbnail</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th className="custom-th">Date</th>
                  <th className="custom-th">Action</th>
                </tr>
              </thead>
              {/* tbody */}
              <tbody>
                {getAllBlog.length > 0 ? (
                  getAllBlog.map((item, index) => {
                    console.log(item);
                    const { thumbnail, date, title, description } = item;
                    return (
                      <tr key={index}>
                        <td>{index + 1}.</td>
                        <td>
                          <div className="thumbnail">
                            {thumbnail && (
                              <img src={item.thumbnail} alt={title} />
                            )}
                          </div>
                        </td>
                        <td>{title}</td>
                        <td>{description}</td>
                        <td>{date}</td>
                        <td>
                          <button>Delete</button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="6">Not Found🙁</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
