import "../index.css";
import { Link } from "react-router-dom";

const Login = () => {
  const tempAlert = function () {
    return alert("Getting around to making this work");
  };

  return (
    <div className="login-container">
      <h2 className="form-title">Log in with</h2>
      <div className="social-login">
        <button className="social-button" onClick={tempAlert}>
          <img src="google.svg" alt="Google" className="social-icon" />
          Google{" "}
        </button>
        <button className="social-button" onClick={tempAlert}>
          <img src="apple.svg" alt="Apple" className="social-icon" />
          Apple
        </button>
      </div>

      <p className="separator">
        <span>or</span>
      </p>

      <form action="#" className="login-form">
        <div className="input-wrapper">
          <input
            type="email"
            placeholder="Email address"
            className="input-field"
            required></input>
          <i className="material-symbols-rounded">mail</i>
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            required></input>
          <i className="material-symbols-rounded">lock</i>
        </div>

        <button className="login-button">Log In</button>
      </form>

      <p className="signup-text">
        Don't have an account? <Link to="/signup"> Signup now</Link>
      </p>
    </div>
  );
};

export default Login;
