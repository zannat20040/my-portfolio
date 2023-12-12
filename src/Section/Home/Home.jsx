import React from "react";
import Banner from "../All section/Banner";
import Feature from "../All section/Feature";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import Aboutme from "../All section/Aboutme";
import Skills from "../All section/Skills";
import Myproject from "../All section/Myproject";
import MoreAboutMe from "../All section/MoreAboutMe";

const Home = () => {
  const sideNav = (
    <>
      <li>
        <Link to="/">
          <FaFacebook />
        </Link>
      </li>
      <li>
        <Link to="/">
          <FaGithub />
        </Link>
      </li>
      <li>
        <Link to="/">
          <FaLinkedinIn />
        </Link>
      </li>
    </>
  );
  const sideNav2 = (
    <>
      <li>
        <Link to="/">
          <MdEmail />
        </Link>
      </li>
      <li>
        <Link to="/">
          <IoCallSharp />
        </Link>
      </li>
    </>
  );
  return (
    <div className="container mx-auto relative">
      <div className="grid grid-cols-6 gap-20  ">
        <div className="">
          <ul className="flex-col items-center menu rounded-box fixed bottom-3 flex justify-center gap-4   text-2xl z-30">
            {sideNav}
            <div className="h-40 bg-emerald-300 w-[2px]"></div>
          </ul>
        </div>
        <div className="col-span-4">
          <Banner></Banner>
          <Aboutme></Aboutme>
          <Skills></Skills>
          <Myproject></Myproject>
          <MoreAboutMe></MoreAboutMe>
          {/* <Feature></Feature> */}
        </div>
        <div className=" flex justify-end -z-30">
          <ul className="flex-col items-center menu rounded-box fixed top-28 flex  gap-4   text-2xl z-30">
            <div className="h-40 bg-emerald-300 w-[2px]"></div>
            {sideNav2}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
