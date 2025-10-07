import "../index.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/");
  };

  return (
    <div className="signup-container">
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

        <button className="login-button" onClick={handleCreateAccount}>
          Create Account
        </button>
        {/* will have to change this to go to dashboard */}
      </form>
    </div>
  );
};

export default SignUp;
