import React, { useState } from "react";
import { hamburgerMenu, close } from "../assets";
import { Link, animateScroll as scroll } from "react-scroll";
import logoImg from "../assets/logo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full h-[80px] fixed bg-white border-b px-5 z-[999999]">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center">
        <img src={logoImg} className="h-[90px] md:h-[125px] -m-3 md:m-0" />
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
            Download Now
          </button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} className="h-[15px]" />
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-50 pb-4 -ml-5 bg-white w-full px-0 text-sm md:hidden border-b"
            : "hidden"
        }
      >
        <ul className="px-4 flex flex-col items-center justify-center font-bold gap-3">
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
              Feedback
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <Link to="OurTeam" smooth={true} duration={1000}>
              Our Team
            </Link>
          </li>
          <button className="px-8 py-3 rounded-md bg-costumeBlue text-white font-bold w-full">
            Download Now
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
