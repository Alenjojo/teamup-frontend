import "./styles.css";
import Navbar from "./Component/NavBar.js";
import Content from "./Component/Contents.js";
import Signup from "./Component/Signup.js";

export default function App() {
  return (
    <div className="app">
      <div className="app_home">
        <Navbar />
        <Content />
      </div>
      {/* <Signup /> */}
    </div>
  );
}
