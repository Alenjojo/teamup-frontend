import "./Contents.css";
import Navbar from "./NavBar.js";
import { Link,useNavigate } from "react-router-dom";
import { ReactComponent as GreenFolder } from "../assets/green_folder.svg";
import { ReactComponent as BlackFolder } from "../assets/black_folder.svg";
import { ReactComponent as BlueFolder } from "../assets/blue_folder.svg";

export default function Content() {

  let navigate=useNavigate()
  return (
    <div className="all-content">
    <Navbar />
    <div className="contents">
      <div className="quote">
        <h1>Work Smarter,</h1>
        <h1>build better</h1>
        <p>All your work better & easier than ever in one place</p>
        <button className="start-btn"
         onClick={ ()=>{
          navigate("/signup");
        }}
        >Get Starded</button>
      </div>

      <div className="folders">
        <GreenFolder className="green" />
        <BlackFolder className="black" />
        <BlueFolder className="blue" />
      </div>
    </div>
    </div>
  );
}
