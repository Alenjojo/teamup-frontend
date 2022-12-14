import "./Signup.css";
import { motion } from "framer-motion";
import Navbar from "./NavBar.js";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { useState } from "react";
import axios from "../Utils/axios-instance";

export default function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [retypePassword, setRetypePassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //check if both passwords are same
    if (password === retypePassword) {
      //data to json
      const payload = JSON.stringify({
        name: name,
        email: email,
        password: password,
      });
      //call register api
      axios({
        method: "post",
        url: "user/register",
        data: payload,
      })
        .then(function (response) {
          if (response.status === 200) {
            console.log(response.status);
            //Navigate
          } else {
            //Something went wrong
          }
        })
        .catch(function (error) {
          console.log(error.response.status);
        });
    } else {
    }
  };

  return (
    <>
      <Navbar page="signup" />
      <div className="signup-page">
        <form className="signup-form">
          <h1>Sign up for FREE</h1>
          <p className="req-info">Full Name</p>
          <div className="data">
            <label for="name">
              <i class="fa-solid fa-user"></i>
            </label>
            <input id="name" onChange={(e) => setName(e.target.value)} />
          </div>
          <p className="req-info">Email</p>
          <div className="data">
            <label for="email">
              <i className="fa-solid fa-envelope"></i>
            </label>
            <input id="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <p className="req-info">Password</p>
          <div className="data">
            <label for="password">
              <i className="fa-solid fa-lock"></i>
            </label>
            <input
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="req-info">Confirm password</p>
          <div className="data">
            <label for="confirm-password">
              <i className="fa-solid fa-lock"></i>
            </label>
            <input
              id="confirm-password"
              onChange={(e) => setRetypePassword(e.target.value)}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.023 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
          >
            Team Up
          </motion.button>
          <div className="horizonatl-rule"></div>
          <p className="policy">
            By clicking the button above, you agree to our Terms of Service and
            Privacy Policy
          </p>
        </form>
        <div className="logo-box">
          <Logo className="logo-lg" />
        </div>
      </div>
    </>
  );
}
