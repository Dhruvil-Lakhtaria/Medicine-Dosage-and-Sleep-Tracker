import React, { useState } from "react";

const LoginForm = () => {
  const [formType, changeType] = useState(false);
  const handleClick = () => {
    console.log("hello");
  };
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div class="login">
          <h1>Welcome</h1>
          <form class="login-form">
            <input type="email" id="email" name="email" placeholder="Email" />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <button class="button" href="#">
              Login
            </button>
          </form>
          <div className="formLinks">
            <a href="/">Forgot password?</a>
            <a href="/" onClick={handleClick}>
              New User?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
