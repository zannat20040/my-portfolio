import React from "react";
import Typewriter from "typewriter-effect";
import banner from "../../assets/banner.png";
const Banner = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl">
        <div className=" text-white">
          <p className="text-emerald-300">Hi, my name is </p>
          {/* <h1 className="text-5xl font-bold mt-5"> <span className="">Zannatul Ferdousi Hema</span></h1> */}
          <h1 className="text-5xl font-bold mt-5 flex gap-4">
            <Typewriter
              options={{
                strings: ["Zannatul Ferdousi Hema"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
            <p className=" mt-3 text-gray-400 text-2xl">
              specializing in designing and developing dynamic web-based
              components and systems.
            </p>

          <h1 className="text-5xl font-bold mt-3 text-emerald-300"></h1>
          <p className="pb-6">
            Passionate and innovative web developer specializing in crafting
            elegant, responsive websites. I blend creativity with precision,
            building user-friendly interfaces and bringing digital visions to
            life. Let's create something extraordinary together!
          </p>
        </div>
        <button className="btn border-0 text-black btn-outline bg-emerald-300">
           Get in touch
          </button>
      </div>
    </div>
  );
};

export default Banner;
