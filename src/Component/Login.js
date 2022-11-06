import "./Login.css"
import Navbar from "./NavBar.js"
import { ReactComponent as Logo } from "../assets/logo.svg";

export default function Login(){
    return(
        <>
            <div>
                <Navbar page="login"/>

                <div className="login-main">
                    <div className="logo-pics">
                        <Logo className="logo-pic1 logo-common"/>
                        <Logo className="logo-pic2 logo-common" />
                        <Logo className="logo-pic3 logo-common"/>
                    </div>

                    <form className="login-form">
                    <h1>Login</h1>
                        <p className="req-info">Email</p>
                            <div className="data">
                                <label  className="inputs" for="email">
                                    <i className="fa-solid fa-envelope icons"></i>
                                </label>
                            <input id="email" />
                            </div>
                        <p className="req-info">Password</p>
                            <div className="data">
                                <label for="password">
                                    <i className=" icons fa-solid fa-lock "></i>
                                </label>
                            <input  className="inputs" id="password" />
                            </div>
                        <button>LOGIN</button>
                    </form>
                </div>    
            </div>
        </>
    )
}