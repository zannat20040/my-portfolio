import React from "react";
import { FaFigma, FaGithub, FaGithubAlt, FaNodeJs } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiExpress,
  SiMongodb,
  SiReact,
  SiTailwindcss,
  SiVisualstudiocode,
} from "react-icons/si";
import { LiaHtml5 } from "react-icons/lia";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Skills = () => {
  AOS.init();

  return (
    <div>
      <div className="mt-16 text-end">
        <p  data-aos="fade-left" className="font-medium text-2xl text-accent">02. My skills</p>
      </div>
      <div  className=" mt-20 grid grid-cols-1 md:grid-cols-2  gap-6 
      ">
        <div data-aos="fade-right" className="card  bg-slate-950 rounded-md shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-accent">Font-End</h2>
            <p>I use these languages, and frameworks used to create the user interface and design of websites.</p>

            <div  className="flex gap-3 flex-wrap mt-6 justify-center">
              <LiaHtml5 className="bg-accent text-black shadow-lg rounded-md w-14 h-14 p-3 " />
              <IoLogoCss3 className="bg-accent text-black shadow-lg rounded-md w-14 h-14 p-3 " />
              <TbBrandJavascript className="bg-accent text-black shadow-lg rounded-md w-14 h-14 p-3 " />
              <SiTailwindcss className="bg-accent text-black shadow-lg rounded-md w-14 h-14 p-3 " />
              <SiReact className="bg-accent text-black shadow-lg rounded-md w-14 h-14 p-3 " />
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="card  bg-slate-950 rounded-md shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-accent">Back-End</h2>
            <p className="flex-grow-0">I use these back-end languages and frameworks to handle server-side operations, manage databases.</p>

            <div  className="flex gap-3 flex-wrap mt-6 justify-center">
              <FaNodeJs className="bg-accent text-black shadow-lg rounded-md w-14 h-14 p-3 " />
              <SiExpress className="bg-accent text-black shadow-lg rounded-md w-14 h-14 p-3 " />
              <SiMongodb className="bg-accent text-black shadow-lg rounded-md w-14 h-14 p-3 " />
            </div>
          </div>
        </div>
        <div  data-aos="fade-right" className="card   bg-slate-950 rounded-md shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-accent">Cloud Services</h2>
            <p className="flex-grow-0">I utilize it to develop and manage the back-end infrastructure of a websites .</p>

            <div  className="flex gap-3 flex-wrap mt-6 justify-center">
            <IoLogoFirebase className="bg-accent text-black shadow-lg rounded-md w-14 h-14 p-3 " />

            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="card  bg-slate-950 rounded-md shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-accent">Tools</h2>
            <p  className="flex-grow-0">I utilize a combination of front-end and back-end along with these popular tools </p>

            <div  className="flex gap-3 flex-wrap mt-6 justify-center">
              <FaGithub className="bg-accent text-black shadow-lg rounded-md w-14 h-14 p-3 " />
              <FaGithubAlt className="bg-accent text-black shadow-lg rounded-md w-14 h-14 p-3 " />
              <FaFigma className="bg-accent text-black shadow-lg rounded-md w-14 h-14 p-3 " />
              <SiVisualstudiocode className="bg-accent text-black shadow-lg rounded-md w-14 h-14 p-3 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
