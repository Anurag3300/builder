"use client";
import { useState } from "react";

const Acc = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="w-full max-w-md mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border-b">
          <button
            className={`w-full flex justify-between text-gray-800 items-center py-4 px-6 text-left text-[16px] md:text-[24px] font-semibold ${
              activeIndex === index
                ? "bg-slate-900 text-yellow-50 rounded-t-2xl"
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
            <div className="py-4 px-6 bg-slate-900 text-white rounded-b-2xl ">
              <ul className="md:tracking-wide md:leading-8">
                {item.content.map((contentItem, contentIndex) => (
                  <li key={contentIndex} className="md:text-base text-[8px]">
                    {" "}
                    ✓ {contentItem}
                  </li>
                ))}
              </ul>

              {/* <div className="mt-6">
                <p className="md:text-2xl  text-sm font-bold">${item.price} / Month</p>
                <button className="bg-orange-500 md:text-2xl  text-sm hover:bg-orange-600 text-white py-2 px-4 rounded mt-4">
                  Free Try
                </button>
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Acc;
