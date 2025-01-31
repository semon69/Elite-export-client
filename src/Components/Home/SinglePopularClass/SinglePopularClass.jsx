import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const SinglePopularClass = ({ singleClass }) => {
  const { image, name, enrolStudent, availableSeats, instructorName, price } =
    singleClass;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="zoom-in"
      className="md:h-[380px] border border-white p-2 shadow-2xl rounded md:flex gap-5 rounded-tr-[100px] hover:scale-105"
    >
      <img className="w-full md:w-1/2 h-[360px] rounded" src={image} alt="" />
      <div className="w-full md:w-1/2 my-4 font-semibold space-y-7 p-2">
        <p className="text-3xl font-bold text-green-500">{name}</p>
        <p className="font-bold">
          Available Seat: <span className="text-xl">{availableSeats}</span>
        </p>
        <p className="font-bold">
          Enroll Student: <span className="text-xl">{enrolStudent} </span>
        </p>
        <p className="font-bold">
          The class is taken by:{" "}
          <span className="text-green-500 text-xl">{instructorName}</span>. One
          of the best teacher in this field.
        </p>
        <div className="flex justify-between items-center">
          <p className="font-bold text-3xl">${price}</p>
          <button className="border-2 p-2 bg-green-500 text-white font-bold rounded">
            <Link to={"/classes"}>Enroll Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePopularClass;
