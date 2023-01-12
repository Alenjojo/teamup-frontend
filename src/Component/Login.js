import { motion } from "framer-motion";
import { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

import "./Login.css";
import Navbar from "./NavBar.js";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Services/UserServices";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //data to json
    const payload = JSON.stringify({
      email: email,
      password: password,
    });
    //call login api
    // await loginUser(payload).then((response) => {
    //   localStorage.setItem("user-data", JSON.stringify(response.data));
    //   navigate("/home");
    // });
    const response = await loginUser(payload);
    if (response.status === 200) {
      localStorage.setItem("user-data", JSON.stringify(response.data));
      navigate("/home");
    }
  };

  return (
    <>
      <div>
        <Navbar page="login" />

        <div className="login-main">
          <div className="logo-pics">
            <Logo className="logo-pic1 logo-common" />
            <Logo className="logo-pic2 logo-common" />
            <Logo className="logo-pic3 logo-common" />
          </div>

          <form className="login-form">
            <h1>Login</h1>
            <p className="req-info">Email</p>
            <div className="data">
              <label className="inputs" for="email">
                <i className="fa-solid fa-envelope icons"></i>
              </label>
              <input id="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <p className="req-info">Password</p>
            <div className="data">
              <label for="password">
                <i className=" icons fa-solid fa-lock "></i>
              </label>
              <input
                className="inputs"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.023 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
            >
              LOGIN
            </motion.button>
          </form>
        </div>
      </div>
    </>
  );
}
