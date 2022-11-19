import React, { Component } from "react";
import About from "./About";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="flex justify-between h-screen">
          <div className="bg-stone-700 w-[20%]"></div>
          <div className="w-[55%]">
            <About />
          </div>
          <div className="bg-orange-500 w-[25%]"></div>
        </div>
      </div>
    );
  }
}

export default Home;
