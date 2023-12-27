import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Project2 = () => {
  AOS.init();
  return (
    <div className="hero mt-14">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <div data-aos="fade-up" className="">
          <h1 className=" mt-4 text-5xl font-bold text-accent">Brand Shop</h1>
          <p className="py-6">
            It is an online E-commerce website for Beauty enthusiasts, makeup
            lovers, skincare aficionado with various functionality.
          </p>
          <div className="flex gap-2 flex-wrap">
            <p className="  text-accent ">Tailwind</p>
            <p className=" text-accent ">React</p>
            <p className="  text-accent  ">Node.js</p>
            <p className="text-accent ">Express.js</p>
            <p className=" text-accent ">Mongodb</p>
          </div>
          <div className="flex gap-3 mt-4 flex-wrap">
            <a href="https://github.com/zannat20040/HA-Beauty-Shop" target="_blank">
              <button className="border btn  py-4 px-16 bg-slate-950 text-white  rounded-md ">
                Client code
              </button>
            </a>
            <a href="https://github.com/zannat20040/HA-beauty-shop-server" target="_blank">
              <button className="border btn  py-4 px-16 bg-slate-950 text-white  rounded-md ">
                Server code
              </button>
            </a>
            <a href="https://brand-shop-3c930.web.app/" target="_blank">
              <button className="border btn py-2 px-16 bg-slate-950 text-white  rounded-md ">
                Live
              </button>
            </a>
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
