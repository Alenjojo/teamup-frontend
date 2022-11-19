import React, { Component } from "react";
import Dashboard from "./Dashboard"
import About from "./About";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="flex justify-between h-screen">
          <div className="w-[20%]">
            <Dashboard />
          </div>
          <div className="bg-slate-400 w-[55%]">
            <About />
          </div>
          <div className="bg-orange-500 w-[25%]"></div>
        </div>
      </div>
    );
  }
}

export default Home;
