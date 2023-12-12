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

const Skills = () => {
  return (
    <div>
      <div className="mt-16 text-end">
        <p className="font-medium text-2xl text-emerald-400">02. My skills</p>
      </div>
      <div className="grid grid-cols-3 gap-6 
      ">
        <div className="card mt-20 bg-slate-950 rounded-md shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-emerald-400">Font-end</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>

            <div  className="flex gap-3 flex-wrap mt-6">
              <LiaHtml5 className="bg-accent text-black shadow-lg rounded-md w-14 h-14 p-3 " />
              <IoLogoCss3 className="bg-accent text-black shadow-lg rounded-md w-14 h-14 p-3 " />
              <TbBrandJavascript className="bg-accent text-black shadow-lg rounded-md w-14 h-14 p-3 " />
              <SiTailwindcss className="bg-accent text-black shadow-lg rounded-md w-14 h-14 p-3 " />
              <SiReact className="bg-accent text-black shadow-lg rounded-md w-14 h-14 p-3 " />
              <IoLogoFirebase className="bg-accent text-black shadow-lg rounded-md w-14 h-14 p-3 " />
            </div>
          </div>
        </div>
        <div className="card  mt-20 bg-slate-950 rounded-md shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-emerald-400">Back-end</h2>
            <p className="flex-grow-0">If a dog chews shoes whose shoes does he choose?</p>

            <div  className="flex gap-3 flex-wrap mt-6">
              <FaNodeJs className="bg-accent text-black shadow-lg rounded-md w-14 h-14 p-3 " />
              <SiExpress className="bg-accent text-black shadow-lg rounded-md w-14 h-14 p-3 " />
              <SiMongodb className="bg-accent text-black shadow-lg rounded-md w-14 h-14 p-3 " />
            </div>
          </div>
        </div>
        <div className="card  mt-20 bg-slate-950 rounded-md shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-accent">Tools</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>

            <div  className="flex gap-3 flex-wrap mt-6">
              <SiMongodb className="bg-accent text-black shadow-lg rounded-md w-14 h-14 p-3 " />
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
