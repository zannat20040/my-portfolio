import React, { useState } from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const MoreAboutMe = () => {
  const [showMore, setShowMore] = useState("Education");

  const ShowEducation = (edu) => {
    setShowMore(edu);
  };

  const ShowSkills = (skills) => {
    setShowMore(skills);
  };

  return (
    <div>
      <div className="mt-32 flex   justify-between items-center " id="scrollToSkils">
        <div>
          <button
            onClick={() => ShowEducation("Education")}
            className="btn  py-2 px-16 bg-slate-950 text-white  rounded-md"
          >
            Education
          </button>
          <button
            onClick={() => ShowSkills("Skills")}
            className="btn  py-2 px-16 bg-slate-950 text-white  rounded-md"
          >
            Technical Skills
          </button>
        </div>
        <p className="font-medium text-2xl text-emerald-400 text-end">
          04. More About me
        </p>
      </div>

      <div className="mt-20">
        <div className="flex flex-col w-full lg:flex-row gap-6">
          {showMore === "Education" && (
            <div className="grid  card w-full  gap-3 ">
              <h1 className="text-3xl font-bold mt-5 text-white">Education</h1>
              <div className="card  rounded-none  bg-slate-950 shadow-2xl">
                <div className="card-body ">
                  <div className="flex gap-2 items-end">
                    <h2 className="card-title text-emerald-300">
                      BSc in Computer Science{" "}
                    </h2>
                    <span>(2021 - 2024)</span>
                  </div>
                  <p>University of SOuth Asia </p>
                  <button className="bg-accent text-black px-4 py-1 w-fit">
                    Runing
                  </button>
                </div>
              </div>
              <div className="card  rounded-none  bg-slate-950 shadow-2xl">
                <div className="card-body ">
                  <div className="flex gap-2 items-end">
                    <h2 className="card-title text-emerald-300">
                      Higher Secondary School Certificate
                    </h2>
                    <span>(2017 - 2019)</span>
                  </div>
                  <p>MileStone Collage </p>
                  <button className="bg-accent text-black px-4 py-1 w-fit">
                    4.42 / 5.00
                  </button>
                </div>
              </div>
              <div className="card  rounded-none  bg-slate-950 shadow-2xl">
                <div className="card-body ">
                  <div className="flex gap-2 items-end">
                    <h2 className="card-title text-emerald-300">
                      Secondary School Certificate{" "}
                    </h2>
                    <span>(2015 - 2017)</span>
                  </div>
                  <p>National Ideal School</p>
                  <button className="bg-accent text-black px-4 py-1 w-fit">
                    5.00 / 5.00
                  </button>
                </div>
              </div>
            </div>
          )}


          {showMore === "Skills" && (
            <div className="grid gap-3 w-full">
              <h1 className="text-3xl font-bold mt-5 text-white">
                Technial Skills
              </h1>
              <div className="grid grid-cols-2 gap-5">
               <div>
               <div className="">
                  <p className="text-emerald-300 font-medium text-lg">HTML5</p>
                  <progress
                    className="progress w-full progress-accent"
                    value="90"
                    max="100"
                  ></progress>
                </div>
                <div className="">
                  <p className="text-emerald-300 font-medium text-lg">CSS3</p>
                  <progress
                    className="progress w-full progress-accent"
                    value="90"
                    max="100"
                  ></progress>
                </div>
                <div className="">
                  <p className="text-emerald-300 font-medium text-lg">
                    Javascript
                  </p>
                  <progress
                    className="progress w-full progress-accent"
                    value="80"
                    max="100"
                  ></progress>
                </div>
                <div className="">
                  <p className="text-emerald-300 font-medium text-lg">
                    Tailwind
                  </p>
                  <progress
                    className="progress w-full progress-accent"
                    value="90"
                    max="100"
                  ></progress>
                </div>
                <div className="">
                  <p className="text-emerald-300 font-medium text-lg">React</p>
                  <progress
                    className="progress w-full progress-accent"
                    value="70"
                    max="100"
                  ></progress>
                </div>
                <div className="">
                  <p className="text-emerald-300 font-medium text-lg">Node</p>
                  <progress
                    className="progress w-full progress-accent"
                    value="55"
                    max="100"
                  ></progress>
                </div>
               </div>

                <div>
                <div className="">
                  <p className="text-emerald-300 font-medium text-lg">
                    Express
                  </p>
                  <progress
                    className="progress w-full progress-accent"
                    value="55"
                    max="100"
                  ></progress>
                </div>
                <div className="">
                  <p className="text-emerald-300 font-medium text-lg">
                    MongoDB
                  </p>
                  <progress
                    className="progress w-full progress-accent"
                    value="60"
                    max="100"
                  ></progress>
                </div>
                <div className="">
                  <p className="text-emerald-300 font-medium text-lg">Git</p>
                  <progress
                    className="progress w-full progress-accent"
                    value="65"
                    max="100"
                  ></progress>
                </div>
                <div className="">
                  <p className="text-emerald-300 font-medium text-lg">Github</p>
                  <progress
                    className="progress w-full progress-accent"
                    value="65"
                    max="100"
                  ></progress>
                </div>
                <div className="">
                  <p className="text-emerald-300 font-medium text-lg">Figma</p>
                  <progress
                    className="progress w-full progress-accent"
                    value="80"
                    max="100"
                  ></progress>
                </div>
                <div className="">
                  <p className="text-emerald-300 font-medium text-lg">
                    Vs Code
                  </p>
                  <progress
                    className="progress w-full progress-accent"
                    value="85"
                    max="100"
                  ></progress>
                </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreAboutMe;
