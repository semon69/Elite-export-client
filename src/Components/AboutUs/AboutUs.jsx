import React from "react";
import "../AboutUs/AboutUs.css";
import lottieData from "./lottie.json";
import Lottie from "lottie-react";

const AboutUs = () => {
  return (
    <div className="bgImage bg-fixed">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex items-center">
          <div className="text-green-500 w-full md:w-1/2 p-2">
            <div className="mb-8">
              <span className="text-4xl  font-bold mb-6 text-green-500 border-b-4 border-green-500 pb-3">
                About Elite Export
              </span>
            </div>
            <p className="text-white py-5">
              Elite Export Sports Academy stands as a beacon of athletic
              excellence in Bangladesh, offering a platform for aspiring
              athletes to hone their skills and pursue their sporting dreams.
              Situated in the bustling city of Dhaka, the academy serves as a
              hub for talent development, catering to individuals from all walks
              of life and backgrounds. As Elite Export Sports Academy continues
              to nurture the next generation of sporting talent, it remains
              steadfast in its mission to empower individuals to realize their
              athletic ambitions, both on and off the field. With a commitment
              to excellence, inclusivity, and innovation, the academy serves as
              a beacon of inspiration for athletes worldwide, shaping the future
              of sports in Bangladesh and beyond. Founded on the principles of
              inclusivity and accessibility, Elite Export Sports Academy
              welcomes students from across the globe, providing a diverse and
              enriching environment for learning and growth. Whether one dreams
              of becoming the next football star, mastering the art of cricket,
              dominating the tennis court, or excelling in any other sport, the
              academy offers comprehensive training programs tailored to each
              individual's needs and aspirations. As Elite Export Sports Academy
              continues to nurture the next generation of sporting talent, it
              remains steadfast in its mission to empower individuals to realize
              their athletic ambitions, both on and off the field. With a
              commitment to excellence, inclusivity, and innovation, the academy
              serves as a beacon of inspiration for athletes worldwide, shaping
              the future of sports in Bangladesh and beyond.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Lottie animationData={lottieData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
