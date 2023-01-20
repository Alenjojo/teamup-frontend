import "./NavBar.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  let text = "";
  let buttonText = "Log in";
  let linkText = "/signup";
  let navigate = useNavigate();

  function signupEdit() {
    return (
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.93 }}
        onClick={() => {
          navigate(linkText);
        }}
        className="login"
      >
        {buttonText}
      </motion.button>
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
      <div
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={require("../assets/teamup_logo.png")} alt="Logo.png" />
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
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.93 }}
              className="signup"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </motion.button>
            <div className="pipe">
              <div className="bar"></div>
            </div>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.93 }}
              className="login"
              onClick={() => {
                navigate("/login");
              }}
            >
              {buttonText}
            </motion.button>
          </div>
        </>
      )}
    </div>
  );
}
