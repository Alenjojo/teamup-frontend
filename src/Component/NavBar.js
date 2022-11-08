import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar(props) {
  let text = "";
  let buttonText = "Log in";
  let linkText = "/signup";
  let navigate = useNavigate();

  function signupEdit() {
    return (
      <button
        onClick={() => {
          navigate(linkText);
        }}
        className="login"
      >
        {buttonText}
      </button>
    );
  }

  function checkPage() {
    if (props.page === "signup" || "login") {
      if (props.page === "signup") {
        text = "Already have an account?";
        buttonText = "Log in";
        linkText = "/login";
        return true;
      } else if (props.page === "login") {
        text = "Don't have an account?";
        buttonText = "Sign Up";
        linkText = "/signup";
        return true;
      }
    } else return false;
  }

  return (
    <div className="navbar">
      <div className="logo">
        <img
          src={require("../assets/teamup_logo.png")}
          alt="Logo.png"
          onClick={() => {
            navigate("/");
          }}
        />
        <h1>TeamUp </h1>
      </div>

      {checkPage() ? (
        <div className="end-section">
          <h2>{text}</h2>
          {signupEdit()}
        </div>
      ) : (
        <>
          <nav className="services">
            <ul>
              <li>
                <a href="#">
                  Product <i className="dropdown fa-solid fa-chevron-down"></i>
                </a>
              </li>
              <li>
                <a href="#">Solution </a>{" "}
                <i className="dropdown fa-solid fa-chevron-down"></i>
              </li>
              <li>
                <a href="#">Learn </a>{" "}
                <i className="dropdown fa-solid fa-chevron-down"></i>
              </li>
              <li>
                <a href="#">Pricing </a>{" "}
                <i className="dropdown fa-solid fa-chevron-down"></i>
              </li>
            </ul>
          </nav>
          <div className="end-section">
            <button
              className="signup"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </button>
            <div className="pipe">
              <div className="bar"></div>
            </div>
            <button
              className="login"
              onClick={() => {
                navigate("/login");
              }}
            >
              {buttonText}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
