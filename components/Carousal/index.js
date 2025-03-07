"use client";
import React, { useEffect, useState } from "react";
import { carousal } from "@/uitls/constant";

const Carousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval;4
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carousal.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-56 overflow-hidden group md:h-[calc(100vh-80px)]">
        {carousal.map((data, index) => (
          <div
            key={index}
            className={`absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={data} alt={`Slide ${index + 1}`} className="w-full" />
          </div>
        ))}
        <div
          className={`bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center py-10 px-10 lg:py-20 lg:px-24 text-white transition-opacity opacity-0 group-hover:opacity-100`}
        >
          <div className="text-5xl text-white font-bold mb-5 max-w-xl text-center">
            This is just a demo title
          </div>
          <div className="text-base text-white/80 font-medium max-w-xl text-center mb-10">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters
          </div>

          <button className="font-bold uppercase text-slate-800 bg-gradient-to-tr from-orange-600/90 transition-all hover:from-orange-200 to-orange-600 hover:to-orange-200 border-2 border-solid border-orange-700 px-4 py-2 rounded-xl shadow-xl">
            Enquire Now
          </button>
        </div>

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {carousal.map((_, index) => (
            <button
              key={index}
              className={`relative rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? "w-6 h-2 rounded-md bg-red-900 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-linear"
                  : "w-2 h-2 bg-gray-400"
              }`}
              aria-current={index === currentIndex ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === 0 ? carousal.length - 1 : prev - 1
            )
          }
          className="absolute transition-opacity opacity-0 group-hover:opacity-100 top-1/2 left-5 transform -translate-y-1/2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 rounded-full hover:bg-white/80 shadow-xl"
        >
          ❮
        </button>
        <button
          onClick={() =>
            setCurrentIndex((prev) => (prev + 1) % carousal.length)
          }
          className="absolute transition-opacity opacity-0 group-hover:opacity-100 top-1/2 right-5 transform -translate-y-1/2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 rounded-full hover:bg-white/80 shadow-xl"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousal;
