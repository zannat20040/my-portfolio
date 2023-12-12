import React from "react";
import pic from "../../../assets/project1.png";
const Project = () => {
  return (
    <div className="hero mt-20">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <div className="image-container ">
          <div className="image1"></div>
        </div>
        <div className="">
          
          <h1 className=" mt-4 text-5xl font-bold text-accent">
            Wedding Planner
          </h1>
          <p className="py-6">
          It is a comprehensive wedding planning platform, designed to help couples to plan their dream wedding with ease and efficiency. 
          </p>
          <div className="flex gap-2">
            <p className=" px-6 text-accent">
              Tailwind
            </p>
            <p className=" px-6 text-accent">
              React
            </p>
          </div>
          <div className="flex mt-3 gap-3 ">
            <button className=" btn  py-4 px-16 bg-slate-950 text-white  rounded-md ">
              Code
            </button>
            <button className=" btnpy-2 px-16 bg-slate-950 text-white  rounded-md ">
              Live
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
