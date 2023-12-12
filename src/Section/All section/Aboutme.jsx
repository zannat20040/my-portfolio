import React from "react";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";

const Aboutme = () => {
  return (
    <div id="sectionToScroll">
      <div className="">
        <p className="font-medium text-2xl text-accent">01. Know me</p>
      </div>
      <div className="hero mt-10">
        <div className="hero-content p-0 grid grid-cols-1 justify-between lg:grid-cols-2 gap-6">
          <div className="order-last lg:order-first">
            <p className="py-6">
              I'm a web developer with a passion for transforming ideas into
              user-friendly and visually appealing websites. Committed to
              staying on the cutting edge of technology, I stay up-to-date with
              the latest trends and tools in web development.
              <br />
              <br />
              My journey in this field has been driven by a love for creating
              seamless and engaging online experiences. I bring a blend of
              technical skills and design sensibilities to the table, ensuring
              that every project I undertake is not only functional but also
              aesthetically pleasing.
              <br />
              <br />
              With a continuous hunger for learning and refining my craft, I am
              excited about the opportunity to collaborate on innovative
              projects. Let's work together to bring your digital ideas to life
              and create something truly remarkable!
            </p>
            <div>
              <p className="text-accent">Best skills on </p>
            </div>
            <div className="flex gap-4 mt-3 flex-wrap">
              <FaCss3Alt className="bg-slate-950 shadow-lg rounded-md w-14 h-14 p-3 text-white" />
              <SiTailwindcss className="bg-slate-950 shadow-lg rounded-md w-14 h-14 p-3 text-white" />
              <IoLogoJavascript className="bg-slate-950 shadow-lg rounded-md w-14 h-14 p-3 text-white" />
              <FaReact className="bg-slate-950 shadow-lg rounded-md w-14 h-14 p-3 text-white" />
            </div>
          </div>
          <div className="order-first animated-element lg:order-last ">
            <img
              src="https://i.ibb.co/QMmdXth/banner.png"
              className="rounded-lg shadow-2xl bg-accent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
