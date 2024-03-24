import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SingleInstructor = ({ singleInstructor }) => {
  const [hover, setHover] = useState(false);

  const { image, name, email } = singleInstructor;
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-aos="zoom-in"
      className="relative overflow-hidden !duration-700 transition-all  h-[410px] px-2 pt-2 rounded"
    >
      <div className="border-2 p-2 shadow-xl my-4 h-[400px] rounded">
        <img className="w-full h-[250px] rounded-2xl " src={image} alt="" />
        <p className="p-2">
          Football, known as soccer in some parts of the world, is more than
          just a sport; it's a global phenomenon that unites people across
          cultures, languages, and continents.
        </p>
        {/* className="relative hidden md:block bg-white rounded overflow-hidden !duration-700 ms-1 text-center transition-all h-[310px] px-2 pt-5"
      > */}
        {/* <div className="text-center  font-semibold mt-5">
          <p className="font-bold">
            Name: Mrs. <span className="text-green-500 text-2xl">{name}</span>
          </p>
          <p className="font-bold">
            Contact: <span className="text-green-500 text-2xl">{email}</span>
          </p>
        </div> */}
      </div>
      <div
        className={`flex justify-center z-10 items-center relative ${
          hover ? "bottom-40" : "-bottom-32"
        } duration-700   gap-3`}
      >
        <div
          className={`text-center  font-semibold mt-5 relative ${
            hover ? "bottom-0" : "-bottom-32"
          }  transition-all !duration-400`}
        >
          <p className="font-bold text-white">
            Name: Mrs. <span className=" text-2xl text-white">{name}</span>
          </p>
          <p className="font-bold text-white">
            Contact: <span className="text-2xl text-white">{email}</span>
          </p>
        </div>
      </div>
      <div
        className={`bg-zinc-600 opacity-60 absolute top-0  left-0 right-0 ${
          hover ? "bottom-0" : ""
        } !duration-500 `}
      ></div>
    </div>
  );
};

export default SingleInstructor;
