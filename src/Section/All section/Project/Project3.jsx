import React from 'react';
import pic from "../../../assets/project1.png";

const Project3 = () => {
    return (
        <div className="hero mt-20">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <div className="group relative text-center">
          <img src={pic} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div className="">
          <div className="flex gap-2">
            <p className=" px-6 text-emerald-300 border-emerald-300 border ">
              Tailwind
            </p>
            <p className=" px-6 text-emerald-300 border-emerald-300 border ">
              React
            </p>
          </div>
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

export default Project3;