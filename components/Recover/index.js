"use client";
import React from "react";
import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

export const Recover = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const recoverData = [
    {
      title: "Brand Strategy",
      content: [
        "Comprehensive Brand Audits",
        "Competitor Research and Analysis",
        "Strategic Brand Creation and Positioning",
      ],
    },
    {
      title: "Creative Services",
      content: [
        "Brand Identity and Corporate Identity Development",
        "Strategic Brand Activation Campaigns",
        "Design and Development of Sales and Marketing Collaterals",
      ],
    },
    {
      title: "Communication Strategy",
      content: [
        "Crafting Key Messages and Messaging Strategies",
        "Creative Campaign Concept Developmentt",
        "Campaign-Specific Collateral Creation",
        "Innovative Advertising Concepts",
      ],
    },
  ];
  return (
    <div className="h-screen flex justify-between flex-col md:flex-row">
      <div className=" w-full h-screen ">
        <h2 className="text-2xl md:text-5xl ml-4 p-5 pl-15 font-sans font-semibold">
          Recover From Google <br /> Penalties with SEO.
        </h2>
        {recoverData.map((item, index) => (
          <div key={index} className=" m-5  ">
            <button
              className={`bg-white border  h-[40px] text-slate-500 rounded-sm w-full flex justify-between items-center py-4 px-6 text-left text-[15px] font-semibold ${
                activeIndex === index
                  ? "shadow-sm border-b-black text-black"
                  : null
              }`}
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <span
                className={`transform transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-300 ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              {item.content.map((contentItem, index) => (
                <a
                  key={index}
                  href="#"
                  className={`bg-white border mt-2 h-[40px] text-slate-500 rounded-sm w-full flex justify-between items-center py-4 px-6 text-left font-sans leading-8 text-[15px] `}
                >
                  <span>{contentItem}</span>
                  <MdArrowOutward />
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-gray-100 md:hidden mt-10 relative w-screen">
          <div className="absolute  z-10 left-4 top-10  animate-bounce-y ">
            <img src="2pic.png" className=" "></img>
          </div>
          <div className="w-screen   md:w-[450px] md:h-[350px] md:m-10 md:ml-20 rounded-2xl absolute">
            <img src="4pic.png" alt="loading" className="rounded-3xl"></img>
          </div>

          <div className="absolute  z-10 right-2  h-[100px] w-[100px] top-14 animate-bounce-y ">
            <img
              src="3pic.png "
              className="h-[100px] w-[100px] rounded-xl"
            ></img>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 hidden md:block relative w-screen">
        <div className="absolute  z-10 left-10 top-10  animate-bounce-y ">
          <img src="2pic.png" className=" "></img>
        </div>
        <div className="w-screen   md:w-[450px] md:h-[350px] md:m-10 md:ml-20 rounded-2xl absolute">
          <img src="4pic.png" alt="loading" className="rounded-3xl"></img>
        </div>

        <div className="absolute  z-10 left-[330px]  top-[250px] animate-bounce-y ">
          <img src="3pic.png " className="h-[200px]  rounded-xl"></img>
        </div>
      </div>
    </div>
  );
};
