import React, { useState } from "react";
import "./AdminLogin.css";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/FirebaseConfig";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //* Login Function
  const login = async (e) => {
    e.preventDefault();
    console.log("Login function called");
    if (!email || !password) {
      return toast.error("Fill all required fields");
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Success");
      localStorage.setItem("admin", JSON.stringify(result));
      navigate("/dashboard");
    } catch (error) {
      toast.error("Login Failed");
      console.log(error);
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          <div className="submit-btn">
            <button type="submit" onClick={login}>
              Login
            </button>
          </div>
        </form>
        {/* Credential */}
        <div className="credential">
          <h4>Credentials</h4>
          <div className="user-credential">
            <p>Email: blogops@gmail.com</p>
            <p>Password: 12345678</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
