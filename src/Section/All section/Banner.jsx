import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import resume from "../../assets/Resume of Hema.pdf";

const Banner = () => {
  return (
    <div className=" pt-28 pb-56 flex flex-col justify-center" id="scrollToUp">
      <div className="">
        <div className=" text-white">
          <p className="text-accent capitalize">Hi, my name is </p>
          <h1 className="text-5xl font-bold mt-5 flex gap-4">
            <Typewriter
              options={{
                strings: ["Zannatul Ferdousi Hema", "A Junior Web Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className=" mt-3 mb-2 text-gray-400 text-2xl ">
            Specializing in designing and developing dynamic website.
          </p>

          <p className="pb-6">
            Passionate and innovative web developer specializing in crafting
            elegant, responsive websites. I blend creativity with precision,
            building user-friendly interfaces and bringing digital visions to
            life. Let's create something extraordinary together!
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <a href={resume} download>
            <button className="btn border-0  capitalize  bg-slate-950 shadow-lg rounded-md p-3 text-white">
              Download my resume
            </button>
          </a>

          <button className="btn btn-outline border-0 text-black bg-accent text-2xl ">
            <Link
              to="sectionToScroll"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <IoArrowDownCircleOutline />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
