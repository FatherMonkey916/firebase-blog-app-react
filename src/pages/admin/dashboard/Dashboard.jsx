import React from "react";
import "./Dashboard.css";
import Navbar from "../../../components/navbar/Navbar";

const Dashboard = () => {
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
              <button>Create Blog</button>
              <button>Logout</button>
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
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <div className="thumbnail">
                      <img
                        src="https://www.invajy.com/wp-content/uploads/2022/11/Into-the-Wild-Quotes-1-600x441.jpeg"
                        alt="Into the wild movie - quote"
                      />
                    </div>
                  </td>
                  <td>Christopher McCandless</td>
                  <td>
                    “People just need to change the way they look at things.” ~
                    Christopher McCandless, “Into The Wild”
                  </td>
                  <td>Mar 09, 2024</td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
