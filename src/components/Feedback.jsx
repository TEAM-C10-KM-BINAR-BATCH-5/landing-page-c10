import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import { courses } from "../data/Courses";
import FeedbackCard from "./FeedbackCard";

const Feedback = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div id="feedback" className="w-full bg-white pb-12">
      <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
        <div className="py-4 text-center">
          <h1 className="py-3 text-3xl font-bold">
            Students' <span className="text-costumeBlue">Feedback</span>
          </h1>
          <p className="text-[#6D737A]">
            Various versions have evolved over the years, sometimes by accident.
          </p>
        </div>

        <Slider {...settings}>
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;
