import React from "react";
import pic from "../../../assets/project1.png";
const Project = () => {
  return (
    <div className="hero mt-20">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <div className="group relative text-center">
          <img src={pic} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="rounded-md group-hover:flex hidden z-20 w-full h-full absolute top-0 bg-[#000000c0] transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100"></div>
          <div className="absolute top-1/2 left-1/2 z-30 text-emerald-300 font-medium transform -translate-x-1/2 -translate-y-1/2">
            <p className="border py-1 px-6 group-hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
              Tailwind
            </p>
            <p className="border py-1 px-6 group-hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
              React
            </p>
          </div>
        </div>
        <div className="">
          <h1 className=" mt-4 text-5xl font-bold text-emerald-300">
            Donation Campaign
          </h1>
          <p className="py-6">
            This project allows users to contribute to diverse categories,
            visualize their impact, and monitor donation statistics
          </p>

          <div className="flex gap-3 ">
            <button className="border btn border-emerald-300 py-4 px-16 bg-slate-950 text-white  rounded-md ">
              Code
            </button>
            <button className="border btn border-emerald-300 py-2 px-16 bg-slate-950 text-white  rounded-md ">
              Live
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
