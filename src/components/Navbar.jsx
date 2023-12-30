import React, { useState } from "react";
import { logo, lock, hamburgerMenu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full h-[80px] fixed bg-white border-b px-5 mt z-50">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        {/* <img src={logo} className="h-[25px]" /> */}
        <strong className="text-2xl text-costumeBlue">LEARNHUB</strong>

        <div className="hidden md:flex items-center">
          <ul className="flex gap-4 text-costumeBlue">
            <li>Home</li>
            <li>Courses</li>
            <li>Achievement</li>
            <li>Review</li>
            <li>Our Team</li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <button className="px-8 py-3 rounded-md bg-costumeBlue text-white font-bold">
            Download Now
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
          <li className="p-4 hover:bg-gray-100">Home</li>
          <li className="p-4 hover:bg-gray-100">Courses</li>
          <li className="p-4 hover:bg-gray-100">Achievement</li>
          <li className="p-4 hover:bg-gray-100">Review</li>
          <li className="p-4 hover:bg-gray-100">Our Team</li>
          <div className="flex flex-col my-4 gap-4">
            <button className="px-8 py-5 rounded-md bg-costumeBlue text-white font-bold">
              Download Now
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
