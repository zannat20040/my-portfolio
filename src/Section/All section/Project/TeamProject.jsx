import React from 'react';

const TeamProject = () => {
    return (
        <div className="hero mt-14">
        <div className="hero-content flex-col gap-10 lg:flex-row">
          <div className="image-container ">
            <div className="image4"></div>
          </div>
          <div data-aos="fade-up" className="">
            <h1 className=" mt-4 text-5xl font-bold text-accent">Bank System</h1>
            <p className="py-6">
            It is a multilevel transaction system for safe and efficient financial operations. It checks and approves transactions at different levels, making sure everything is secure and reliable.
            </p>
            <div className="flex gap-2 flex-wrap">
              <p className="  text-accent  ">Tailwind</p>
              <p className="  text-accent  ">React</p>
              <p className=" text-accent  ">Node</p>
              <p className=" text-accent ">Express</p>
              <p className="  text-accent ">Mongodb</p>
              <p className="  text-accent ">Mongoose</p>
            </div>
            <div className="flex gap-3 mt-3 flex-wrap">
              <a
                href="https://github.com/hexadev6/sentinel-bank-client"
                target="_blank"
              >
                <button className="border btn  py-4 px-16 bg-slate-950 text-white  rounded-md ">
                  Client code
                </button>
              </a>
              <a
                href="https://github.com/hexadev6/sentinel-bank-server"
                target="_blank"
              >
                <button className="border btn  py-4 px-16 bg-slate-950 text-white  rounded-md ">
                  Server code
                </button>
              </a>
              <a href="https://sentinel-trust-bank.web.app/" target="_blank">
                <button className="border btn py-2 px-16 bg-slate-950 text-white  rounded-md ">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TeamProject;