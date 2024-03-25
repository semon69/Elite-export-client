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
        {/* <p className="p-2">
          Football, known as soccer in some parts of the world, is more than
          just a sport; it's a global phenomenon that unites people across
          cultures, languages, and continents.
        </p> */}
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
          <p className="font-bold text-white pb-4">
            <span className=" text-2xl text-white">{name}</span>
          </p>
          <div className="flex gap-3 justify-center items-center">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
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
