import React, { Component } from "react";
import Dashboard from "./Dashboard"
import About from "./About";
import Tasks from "./Tasks";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="flex justify-between h-screen overflow-x-hidden">
          <div className="w-[20%]">
            <Dashboard />
          </div>
          <div className="bg-slate-400 w-[55%]">
            <About />
          </div>
          <div className="w-[25%]">
            <Tasks />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
