import React from "react";
import pic from "../../../assets/project1.png";

const Project2 = () => {
  return (
    <div className="hero mt-20">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <div className="">
          <div className="flex gap-2 flex-wrap">
            <p className=" px-6 text-emerald-300 border-emerald-300 border ">
              Tailwind
            </p>
            <p className=" px-6 text-emerald-300 border-emerald-300 border ">
              React
            </p>
            <p className=" px-6 text-emerald-300 border-emerald-300 border ">
              Node
            </p>
            <p className=" px-6 text-emerald-300 border-emerald-300 border ">
              Express
            </p>
            <p className=" px-6 text-emerald-300 border-emerald-300 border ">
              Mongodb
            </p>
          </div>
          <h1 className=" mt-4 text-5xl font-bold text-emerald-300">
            Brand Shop
          </h1>
          <p className="py-6">
            It is an online E-commerce website for Beauty enthusiasts, makeup
            lovers, skincare aficionado with various functionality.
          </p>

          <div className="flex gap-3 flex-wrap">
            <button className="border btn border-emerald-300 py-4 px-16 bg-slate-950 text-white  rounded-md ">
              Client code
            </button>
            <button className="border btn border-emerald-300 py-4 px-16 bg-slate-950 text-white  rounded-md ">
              Server code
            </button>
            <button className="border btn border-emerald-300 py-2 px-16 bg-slate-950 text-white  rounded-md ">
              Live
            </button>
          </div>
        </div>
        <div className="image-container ">
          <div className="image2"></div>
        </div>
      </div>
    </div>
  );
};

export default Project2;