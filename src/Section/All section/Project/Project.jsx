import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Project = () => {
  AOS.init();
  return (
    <div className="hero mt-14">
      <div className="hero-content flex flex-col-reverse gap-10 lg:flex-row ">
        <div className="image-container">
          <div className="image1 "></div>
        </div>
        <div data-aos="fade-up"  className="">
          <h1 className=" mt-4 text-5xl font-bold text-accent">
            Wedding Planner
          </h1>
          <p className="py-6">
            It is a comprehensive wedding planning platform, designed to help
            couples to plan their dream wedding with ease and efficiency.
          </p>
          <div className="flex gap-2 flex-wrap">
            <p className=" px-6 text-accent">Tailwind</p>
            <p className=" px-6 text-accent">React</p>
          </div>
          <div className="flex mt-3 gap-3 flex-wrap">
            <a href="https://github.com/zannat20040/Fate-Forever" target="_blank">
              <button className=" btn  py-4 px-16 bg-slate-950 text-white  rounded-md ">
                Code
              </button>
            </a>
            <a href="https://fateforever-4c243.web.app/" target="_blank">
              <button className=" btn py-2 px-16 bg-slate-950 text-white  rounded-md ">
                Live
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
