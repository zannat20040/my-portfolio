import React from "react";
import Typewriter from "typewriter-effect";
import banner from "../../assets/banner.png";
const Banner = () => {
  return (
    <div className="min-h-screen py-40">
      <div className="grid grid-cols-2 items-center justify-between mx-auto">
        <div className=" text-white">
          <p className="font-medium text-gray-400">Welcome to my world</p>
          <h1 className="text-5xl font-bold mt-5">Hi, I am a </h1>
          <Typewriter
            options={{
              strings: ["Junior Web Developer", "Front-end Developer"],
              autoStart: true,
              loop: true,
            }}
          />
          <h1 className="text-5xl font-bold mt-3 text-emerald-300"></h1>
          <p className="pb-6">
            Passionate and innovative web developer specializing in crafting
            elegant, responsive websites. I blend creativity with precision,
            building user-friendly interfaces and bringing digital visions to
            life. Let's create something extraordinary together!
          </p>
          <button className="btn border-0 text-black btn-outline bg-emerald-300">
            Downlod my resume
          </button>
        </div>
        {/* <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/wgSND3w/pattern-removebg-preview.png)",
          }}
        >
          <div className=""></div>
          <div className="hero-content text-center text-neutral-content">
          
          </div>
        </div> */}
        <img
            src={banner}
            className="w-full"
          />
      </div>
    </div>
  );
};

export default Banner;
