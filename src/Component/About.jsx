import React, { useState } from "react";
import LineChart from "../Utils/LineChart";

function About() {
  const data = [
    {
      User: "raze",
      Role: "runner",
      Project: "proj A",
      Time: "Nov 12th",
      Status: "OnGoing",
    },
    {
      User: "sage",
      Role: "healer",
      Project: "proj A",
      Time: "Nov 12th",
      Status: "Completed",
    },
    {
      User: "skye",
      Role: "blinder",
      Project: "proj A",
      Time: "Nov 12th",
      Status: "Pending",
    },
    {
      User: "raze1",
      Role: "runner",
      Project: "proj A",
      Time: "Nov 12th",
      Status: "OnGoing",
    },
  ];
  return (
    <div className="flex-col">
      <div className="flex-col text-left">
        <div className="mt-5 ml-8 text-4xl font-bold">You've got</div>
        <div className="mt-5 ml-8 text-4xl font-bold">.. tasks left</div>
      </div>
      {/* Search Bar */}
      <div className="mx-10 my-5">
        <div className="flex">
          <div class="inset-y-0 left-0 flex items-center pl-3  relative w-full mr-2">
            <div class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder="Search"
              required
            />
          </div>
          <button class="bg-indigo-500 rounded-3xl p-3 shadow-lg shadow-indigo-500/50">
            Search
          </button>
        </div>
      </div>
      {/* Graph */}
      <div className="rounded-lg overflow-hidden shadow-xl bg-gray-50 p-5 relative mx-10">
        <LineChart />
      </div>
      {/* Trending Tasks ListView */}
      <div className="rounded-lg overflow-hidden p-5 relative mx-10 mt-5 flex justify-around text-gray-500">
        <div>USER</div>
        <div>ROLE</div>
        <div>PROJECT</div>
        <div>TIME</div>
        <div>STATUS</div>
      </div>
      {data.map((item) => (
        <div className="rounded-lg overflow-hidden shadow-xl bg-gray-50 p-5 relative mx-10 flex justify-around text-gray-500 mb-2">
          <div>{item.User}</div>
          <div>{item.Role}</div>
          <div>{item.Project}</div>
          <div>{item.Time}</div>
          <div>{item.Status}</div>
        </div>
      ))}
    </div>
  );
}

export default About;
