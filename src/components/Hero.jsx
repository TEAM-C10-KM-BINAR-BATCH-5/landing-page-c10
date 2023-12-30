import React from "react";
import { heroImg } from "../assets";
import homeImg from "../assets/home.png";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full bg-white py-28 px-4">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0">
        <div className="flex flex-col justify-start gap-4">
          <p className="py-2 text-2xl text-costumeBlue font-medium">
            START TO SUCCESS
          </p>
          <h1 className="md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold">
            Empowering <span className="text-costumeBlue">Minds</span> One
            Lesson at a Time: <span className="text-costumeBlue">LearnHub</span>{" "}
          </h1>
          <p className="py-2 text-lg text-gray-600">
            Various versions have evolved over the years, sometimes by accident.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img src={homeImg} className="md:order-last  order-first" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
