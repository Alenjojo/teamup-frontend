import "./styles.css";
import Content from "./Component/Contents.js";
import Signup from "./Component/Signup.js";
import Login from "./Component/Login.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
