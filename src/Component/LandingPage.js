import "./LandingPage.css";
import Navbar from "./NavBar.js";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ReactComponent as GreenFolder } from "../assets/green_folder.svg";
import { ReactComponent as BlackFolder } from "../assets/black_folder.svg";
import { ReactComponent as BlueFolder } from "../assets/blue_folder.svg";
import { useEffect } from "react";

export default function LandingPage() {
  let navigate = useNavigate();

  useEffect(() => {
    var userData = JSON.parse(localStorage.getItem("user-data"));
    if (userData != null) {
      navigate("/home");
    }
  });
  return (
    <div className="all-content">
      <Navbar />
      <div className="contents">
        <div className="quote">
          <h1>Work Smarter,</h1>
          <h1>build better</h1>
          <p>All your work better & easier than ever in one place</p>

          <motion.button
            className="start-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.84 }}
            onClick={() => {
              navigate("/signup");
            }}
          >
            Get Starded
          </motion.button>
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
