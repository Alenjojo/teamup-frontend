import "./Login.css";
import Navbar from "./NavBar.js";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //data to json
    const payload = JSON.stringify({
      email: email,
      password: password,
    });
    //call login api
    axios({
      method: "post",
      url: "https://team-up-v1.herokuapp.com/user/token",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json;charset=utf-8",
      },
      data: payload,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
              <input id="email" />
            </div>
            <p className="req-info">Password</p>
            <div className="data">
              <label for="password">
                <i className=" icons fa-solid fa-lock "></i>
              </label>
              <input className="inputs" id="password" />
            </div>
            <button onClick={handleSubmit}>LOGIN</button>
          </form>
        </div>
      </div>
    </>
  );
}
