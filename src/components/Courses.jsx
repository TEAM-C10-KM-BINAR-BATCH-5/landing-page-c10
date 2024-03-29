import { useState, useEffect } from "react";
import Card from "./Card";
import Slider from "react-slick";
import { courses } from "../data/Courses";
import { getCourses } from "../data/api";

const Courses = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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

  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const coursesData = await getCourses();
    setCourse(coursesData);
  };

  return (
    <div id="courses" className="w-full bg-[#E9F8F3B2] py-12">
      <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
        <div className="py-4 text-center">
          <h1 className="py-3 text-3xl font-bold">
            Our Popular <span className="text-costumeBlue">Courses</span>
          </h1>
          <p className="text-[#6D737A]">
            Various versions have evolved over the years, sometimes by accident.
          </p>
        </div>

        <Slider {...settings} className="mx-12">
          {course.map((course, i) => (
            <div className="mb-5 md:mb-0" key={i}>
              <Card course={course} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Courses;
