import "./NavBar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="./images/teamup_logo.png" alt="Logo.png" />
        <h1>TeamUp </h1>
      </div>

      <nav className="services">
        <ul>
          <li>
            <a href="#">
              product <i className="dropdown fa-solid fa-chevron-down"></i>
            </a>
          </li>
          <li>
            <a href="#">solution </a>{" "}
            <i className="dropdown fa-solid fa-chevron-down"></i>
          </li>
          <li>
            <a href="#">learning </a>{" "}
            <i className="dropdown fa-solid fa-chevron-down"></i>
          </li>
          <li>
            <a href="#">pricing </a>{" "}
            <i className="dropdown fa-solid fa-chevron-down"></i>
          </li>
        </ul>
      </nav>

      <div className="end-section">
        <button className="signup">Sign up</button>
        <div className="pipe">
          <div className="bar"></div>
        </div>
        <button className="login">Log in</button>
      </div>
    </div>
  );
}
