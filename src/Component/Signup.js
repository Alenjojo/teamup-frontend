import "./Signup.css";
import Navbar from "./NavBar.js"
import { ReactComponent as Logo } from "../assets/logo.svg";

export default function Signup() {
  return (
  <>
    <Navbar page= "signup" />
    <div className="signup-page">
    
      <form className="signup-form">
      <h1>Sign up for FREE</h1>
        <p className="req-info">Full Name</p>
        <div className="data">
          <label for="name">
            <i class="fa-solid fa-user"></i>
          </label>
          <input id="name" />
        </div>
        <p className="req-info">Email</p>
        <div className="data">
          <label for="email">
            <i className="fa-solid fa-envelope"></i>
          </label>
          <input id="email" />
        </div>
        <p className="req-info">Password</p>
        <div className="data">
          <label for="password">
            <i className="fa-solid fa-lock"></i>
          </label>
          <input id="password" />
        </div>
        <p className="req-info">Confirm password</p>
        <div className="data">
          <label for="confirm-password">
            <i className="fa-solid fa-lock"></i>
          </label>
          <input id="confirm-password" />
        </div>
        <button>Team Up</button>
        <div className="horizonatl-rule"></div>
        <p className="policy">
          By clicking the button above, you agree to our Terms of Service and
          Privacy Policy
        </p>
      </form>
      <div className="logo-box">
        <Logo className="logo-lg"/>
      </div>
    </div>
  </>
  );
}
