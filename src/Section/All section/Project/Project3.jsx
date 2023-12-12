import React from "react";
import pic from "../../../assets/project1.png";

const Project3 = () => {
  return (
    <div className="hero mt-20">
      <div className="hero-content flex-col gap-10 lg:flex-row">
       
        <div className="">
         
          <h1 className=" mt-4 text-5xl font-bold text-emerald-300">
            Job Market
          </h1>
          <p className="py-6">
            It is an all-in-one platform that connects skilled people with
            exciting opportunities, and empowers employers to find the perfect
            fit for their team or company
          </p>
          <div className="flex gap-2 flex-wrap">
            <p className="  text-emerald-300  ">
              Tailwind
            </p>
            <p className="  text-emerald-300  ">
              React
            </p>
            <p className=" text-emerald-300  ">
              Node
            </p>
            <p className=" text-emerald-300 ">
              Express
            </p>
            <p className="  text-emerald-300 ">
              Mongodb
            </p>
          </div>
          <div className="flex gap-3 mt-3 flex-wrap">
            <button className=" btn py-4 px-16 bg-slate-950 text-white  rounded-md ">
              Client code
            </button>
            <button className=" btn py-4 px-16 bg-slate-950 text-white  rounded-md ">
              Server code
            </button>
            <button className=" btn  py-2 px-16 bg-slate-950 text-white  rounded-md ">
              Live
            </button>
          </div>
        </div>
        <div className="image-container ">
          <div className="image3"></div>
        </div>
      </div>
    </div>
  );
};

export default Project3;
