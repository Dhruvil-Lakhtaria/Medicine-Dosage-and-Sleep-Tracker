import React from "react";

const LoginForm = () => {
  return (
    <div className="login-wrapper">
      <div className="main">
        <input type="checkbox" id="chk" />
        <div className="signup">
          <form>
            <label htmlFor="chk">Sign up</label>
            <input
              type="text"
              className="login-input"
              name="txt"
              placeholder="User name"
              required=""
            />
            <input
              type="email"
              className="login-input"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              className="login-input"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button className="signup-btn">Sign up</button>
          </form>
        </div>

        <div className="login">
          <form>
            <label htmlFor="chk">Login</label>
            <input
              type="email"
              className="login-input"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              type="password"
              name="pswd"
              className="login-input"
              placeholder="Password"
              required=""
            />
            <button className="login-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
