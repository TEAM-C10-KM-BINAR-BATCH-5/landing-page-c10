import React, { useState } from "react";
import { hamburgerMenu, close } from "../assets";
import { Link, animateScroll as scroll } from "react-scroll";
import logoImg from "../assets/logo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full h-[80px] fixed bg-white border-b px-5 mt z-50">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <img src={logoImg} className="h-[125px]" />
        <div className="hidden md:flex items-center">
          <ul className="flex gap-4 text-costumeBlue">
            <li className="cursor-pointer">
              <Link to="home" smooth={true} duration={1000}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="courses" smooth={true} duration={1000}>
                Course
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="achievement" smooth={true} duration={1000}>
                Achievement
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="feedback" smooth={true} duration={1000}>
                FeedBack
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="OurTeam" smooth={true} duration={1000}>
                Our Team
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <button className="px-8 py-3 rounded-md bg-costumeBlue text-white font-bold">
            <a href="https://play.google.com/store/apps?hl=en&gl=US">
              Download Now
            </a>
          </button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} />
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b"
            : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100">
            <Link to="home" smooth={true} duration={1000}>
              Home
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <Link to="courses" smooth={true} duration={1000}>
              Course
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <Link to="achievement" smooth={true} duration={1000}>
              Achievement
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <Link to="feedback" smooth={true} duration={1000}>
              FeedBack
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <Link to="OurTeam" smooth={true} duration={1000}>
              Our Team
            </Link>
          </li>
          <div className="flex flex-col my-4 gap-4">
            <button className="px-8 py-5 rounded-md bg-costumeBlue text-white font-bold">
              <a href="https://play.google.com/store/apps?hl=en&gl=US">
                Download Now
              </a>
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
