import React from "react";
import "./AdminLogin.css";

const AdminLogin = () => {
  return (
    <div className="admin-login-container">
      <div className="admin-login-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="submit-btn">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
