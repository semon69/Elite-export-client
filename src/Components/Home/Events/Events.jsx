import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Events = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-7xl mx-auto mt-12 mb-12 p-2">
      <div className="text-center  mb-14">
        <span className="text-4xl  font-bold mb-6 text-green-500 border-b-4 border-green-500 pb-3">
          Upcoming Events
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          data-aos="zoom-out"
          style={{
            backgroundImage: `url(https://cdn.pixabay.com/photo/2018/06/03/19/57/football-3451408_640.jpg)`,
            backgroundColor: "rgb(140,140,140)",
          }}
          className="relative h-[350px] bg-center bg-cover bg-no-repeat bg-blend-multiply rounded hover:cursor-pointer "
        >
          <div className="flex flex-col mt-2 md:mt-20 items-center">
            <p className="border-2 bg-green-500 text-white  p-2 font-bold">
              28/05/2024
            </p>
            <p className="font-bold mt-3 text-white">
              Learn, how to play football when opponents is more stronger than
              you
            </p>
            <p className="font-bold text-lg text-white mt-4">
              Time: 16:00 - 18:00 UTC
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div
            data-aos="zoom-out"
            className="bg-white p-2 rounded relative hover:scale-75 cursor-pointer"
          >
            <div>
              <img
                className="rounded"
                src="https://cdn.pixabay.com/photo/2018/03/30/12/53/people-3275289_1280.jpg"
              />
            </div>
            <p className="border-2 bg-green-500 text-white absolute md:top-2/4 md:bottom-32 bottom-20 md:left-20 left-32 p-2 font-bold">
              30/05/2024
            </p>
            <p className="font-bold mt-8">
              Learn, how to keep calm when you are in field
            </p>
            <p className="font-bold text-lg">Time: 16:00 - 18:00 UTC</p>
          </div>
          <div
            data-aos="zoom-out"
            className="bg-white p-2 rounded relative hover:scale-75 cursor-pointer"
          >
            <div>
              <img
                className="rounded"
                src="https://cdn.pixabay.com/photo/2016/08/11/18/47/volleyball-team-1586522_960_720.jpg"
              />
            </div>
            <p className="border-2 bg-green-500 text-white absolute md:top-2/4 md:bottom-32 bottom-24 md:left-20 left-32 p-2 font-bold">
              10/06/2024
            </p>
            <p className="font-bold mt-8">
              Learn, how to grow in basketball pitch when playing
            </p>
            <p className="font-bold text-lg">Time: 16:00 - 18:00 UTC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
