import "./Signup.css";

export default function Signup() {
  return (
    <div className="signup-page">
      <h1>Sign up for FREE</h1>
      <form className="signup-form">
        Full Name
        <br />
        <div className="data">
          <label for="name">
            <i class="fa-solid fa-user"></i>
          </label>
          <input id="name" />
        </div>
        Email
        <br />
        <div className="data">
          <label for="email">
            <i className="fa-solid fa-envelope"></i>
          </label>
          <input id="email" />
        </div>
        Password
        <br />
        <div className="data">
          <label for="password">
            <i className="fa-solid fa-lock"></i>
          </label>
          <input id="password" />
        </div>
        <button>Team Up</button>
        <div className="horizonatl-rule"></div>
        <p>
          By clicking the button above, you agree to our Terms of Service and
          Privacy Policy
        </p>
      </form>
    </div>
  );
}
