import React from "react";
import resume from "../../assets/Hema's Resume.pdf";
import { Link } from "react-scroll";


const Navbar = () => {
  const navList = (
    <>
      <li>
      <Link
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="scrollToUp"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="sectionToScroll"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
        >
          About
        </Link>
      </li>
      <li>
      <Link
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="scrollToSkils"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
        >
          Skills
        </Link>
      </li>
      <li>
      <Link
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="scrollToProjects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
        >
          Projects
        </Link>
      </li>
      <li>
      <Link
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="scrollToContact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
        >
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar text-black container mx-auto font-medium">
      <div className="navbar-start ">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm rounded-none dropdown-content mt-3 z-[1] p-2  shadow bg-accent w-52"
          >
            {navList}
          </ul>
        </div>
        <h1 className="text-3xl font-bold">HEMA</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1 ">{navList}</ul>
      </div>
      <div className="navbar-end">
        <a href={resume} download>
        <button className="btn btn-outline rounded-none hover:bg-slate-950 hover:text-white outline-0 text-black  bg-accent border-black">
          Resume
        </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
