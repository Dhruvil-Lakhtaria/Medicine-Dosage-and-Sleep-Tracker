import React, { useState } from "react";

const LoginForm = () => {
  const [signupDetails, addDetails] = useState([]);
  const [userName, updateUserName] = useState("");
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const [loggedEmail, updateLoggedEmail] = useState("");
  const [loggedPassword, updateLoggedPassword] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const newDetails = {
      userName: userName,
      email: email,
      password: password,
    };
    addDetails([...signupDetails, newDetails]);
    updateUserName("");
    updateEmail("");
    updatePassword("");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    signupDetails.forEach((signUp) => {
      if (loggedEmail === signUp.email && loggedPassword === signUp.password) {
        alert("Registered User");
      }
      updateLoggedEmail("");
      updateLoggedPassword("");
    });
  };
  return (
    <div className="login-wrapper">
      <div className="main">
        <input type="checkbox" id="chk" />
        <div className="signup">
          <form>
            <label htmlFor="chk">Sign up</label>
            <input
              value={userName}
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
            <button className="signup-btn" onClick={handleClick}>
              Sign up
            </button>
          </form>
        </div>

        <div className="login">
          <form>
            <label htmlFor="chk">Login</label>
            <input
              value={loggedEmail}
              onChange={(e) => updateLoggedEmail(e.target.value)}
              type="email"
              className="login-input"
              name="email"
              placeholder="Email"
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
