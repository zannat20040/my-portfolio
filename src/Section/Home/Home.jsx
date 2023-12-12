import React from "react";
import Banner from "../All section/Banner";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoArrowUpCircleOutline, IoCallSharp } from "react-icons/io5";
import Aboutme from "../All section/Aboutme";
import Skills from "../All section/Skills";
import Myproject from "../All section/Myproject";
import MoreAboutMe from "../All section/MoreAboutMe";
import Contact from "../All section/Contact";
import { Link } from "react-scroll";

const Home = () => {
  const sideNav = (
    <>
       <li>
      <a href="https://www.facebook.com/profile.php?id=100006368747141" target="_blank" >
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://github.com/zannat20040" target="_blank" >
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/zannatul-ferdousi-hema-2a33572a4/" target="_blank" >
        <FaLinkedinIn />
      </a>
    </li>
    </>
  );
  const sideNav2 = (
    <>
      <li>
      <a href="mailto:zannatulhema0110@gmail.com">
        <MdEmail />
      </a>
    </li>
    <li>
      <a href="tel:01602644264">
        <IoCallSharp />
      </a>
    </li>
    </>
  );
  return (
    <div className="container mx-auto relative">
      <div className="grid grid-cols-5  md:grid-cols-6 gap-20 px-4 ">
        <div className="">
          <ul className=" hidden flex-col items-center menu rounded-box fixed bottom-3 md:flex justify-center gap-4   text-2xl z-30">
         
            {sideNav}
            <div className="h-20 md:h-40 bg-accent w-[2px]"></div>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4">
          <Banner></Banner>
          <Aboutme></Aboutme>
          <Skills></Skills>
          <Myproject></Myproject>
          <MoreAboutMe></MoreAboutMe>
          <Contact></Contact>
        </div>
        <div className="hidden md:flex justify-end ">
          <ul className="flex-col items-center  menu rounded-box fixed top-28 flex justify-center gap-4   text-2xl z-30">
            <div className="h-40 bg-accent w-[2px]"></div>
            {sideNav2}
            <button className="btn btn-outline border-0 text-black bg-accent text-2xl ">
              <Link
                to="scrollToUp"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="border-b-0"
              >
                <IoArrowUpCircleOutline />
              </Link>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
