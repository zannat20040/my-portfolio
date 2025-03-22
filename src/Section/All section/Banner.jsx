import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import resume from "../../assets/Resume of Hema.pdf";
import {  FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import {  IoCallSharp } from "react-icons/io5";

const Banner = () => {
  const sideNav = (
    <>
      <li>
        <a
          className="bg-accent justify-center flex items-center text-black shadow-lg rounded-md w-14 h-14 p-3 "
          href="https://github.com/zannat20040"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          className="bg-accent justify-center flex items-center text-black shadow-lg rounded-md w-14 h-14 p-3 "
          href="https://www.linkedin.com/in/zannatul-ferdousi-hema-2305622a7/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </li>
    </>
  );
  const sideNav2 = (
    <>
      <li>
        <a
          className="bg-accent justify-center flex items-center text-black shadow-lg rounded-md w-14 h-14 p-3 "
          href="mailto:zannatulhema0110@gmail.com"
        >
          <MdEmail />
        </a>
      </li>
      <li>
        <a
          className="bg-accent justify-center flex items-center text-black shadow-lg rounded-md w-14 h-14 p-3 "
          href="tel:01602644264"
        >
          <IoCallSharp />
        </a>
      </li>
    </>
  );

  // ..

  return (
    <div className=" pt-10 pb-56 flex flex-col justify-center" id="scrollToUp">
      <div className="">
        <div className=" text-white">
          <p className="text-accent capitalize">Hi, my name is </p>
          <h1 className="text-5xl font-bold mt-5 flex gap-4">
            <Typewriter
              options={{
                strings: [
                  "Zannatul Ferdousi Hema",
                  "A Frontend Developer | MERN Stack Driven",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className=" mt-3 mb-2 text-gray-400 text-2xl ">
            Specializing in designing and developing dynamic website.
          </p>
          <p className="pb-6">
            Passionate frontend developer with expertise in React, Next.js, and
            the MERN stack. I blend creativity with precision to build
            responsive, user-friendly websites that deliver exceptional
            experiences. Let’s create something extraordinary and bring your
            ideas to life!
          </p>
        </div>
        <ul className=" rounded-box flex md:hidden gap-4 text-2xl mb-6">
          {sideNav}
          {sideNav2}
        </ul>

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
