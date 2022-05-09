import React, { useState } from "react";

const LoginForm = ({ onRegister, onLogin }) => {
  // const [signupDetails, addDetails] = useState([]);
  const [name, updateUserName] = useState("");
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const [loggedName, updateLoggedName] = useState("");
  const [loggedPassword, updateLoggedPassword] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const newDetails = {
      name: name,
      email: email,
      password: password,
    };
    onRegister(newDetails);
    updateUserName("");
    updateEmail("");
    updatePassword("");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const loginDetail = {
      name: loggedName,
      password: loggedPassword,
    };
    onLogin(loginDetail);
    updateLoggedName("");
    updateLoggedPassword("");
  };
  return (
    <div className="login-wrapper">
      <div className="main">
        <input type="checkbox" id="chk" />
        <div className="signup">
          <form>
            <label htmlFor="chk">Sign up</label>
            <input
              value={name}
              onChange={(e) => updateUserName(e.target.value)}
              type="text"
              className="login-input"
              name="txt"
              placeholder="User name"
              required=""
            />
            <input
              value={email}
              onChange={(e) => updateEmail(e.target.value)}
              type="email"
              className="login-input"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              value={password}
              onChange={(e) => updatePassword(e.target.value)}
              className="login-input"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button className="signup-btn" onClick={handleRegister}>
              Sign up
            </button>
          </form>
        </div>

        <div className="login">
          <form>
            <label htmlFor="chk">Login</label>
            <input
              value={loggedName}
              onChange={(e) => updateLoggedName(e.target.value)}
              type="text"
              className="login-input"
              name="email"
              placeholder="Name"
            />
            <input
              value={loggedPassword}
              onChange={(e) => updateLoggedPassword(e.target.value)}
              type="password"
              name="pswd"
              className="login-input"
              placeholder="Password"
            />
            <button className="login-btn" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
