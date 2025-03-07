"use client";
import React from "react";
import ModalComponent from "../Modal";

const FloorPlan = (props) => {
    console.log(props)
  const { title,subtitle,floorPlanData,openModal, setOpenModal } = props;
//   console.log(floorPlanData)
  return (
    <div
      id="floor plan"
      className="flex flex-col py-4 px-8 gap-8 items-center justify-center bg-background"
    >
      <div className="max-w-4xl w-full">
        {title ? (
          <h2 className="text-5xl font-semibold text-heading hover:text-heading/80 mb-2 text-center">
            {title}
          </h2>
        ) : (
          <></>
        )}
        {subtitle ? (
          <p className="text-gray-600 text-center mb-12">{subtitle}</p>
        ) : (
          <></>
        )}

        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="grid md:grid-cols-2 gap-8">
            {floorPlanData && floorPlanData ? (
              floorPlanData.map((floorData, floorIndex) => (
                <figure className="relative" key={floorIndex}>
                  {floorData.url ? (
                    <img
                      src={floorData.url}
                      alt={floorData.alt}
                      className="w-96 blur-sm"
                    />
                  ) : (
                    <></>
                  )}
                  {floorData.figureText ? (
                    <figcaption className="text-center pt-2">
                      {floorData.figureText}
                    </figcaption>
                  ) : (
                    <></>
                  )}
                  {floorData.ctaData &&
                  floorData.ctaData.buttonText &&
                  typeof floorData.ctaData.buttonClick === "function" ? (
                    <button
                      className="px-2 sm:px-4 py-3 bg-slate-900 text-white rounded-lg font-medium absolute top-1/3 right-10 sm:right-1/4 
                  tracking-wide uppercase hover:bg-heading/80 transform hover:-translate-y-1 
                  transition-all duration-300 shadow-lg hover:shadow-xl"
                      onClick={floorData.ctaData.buttonclick}
                    >
                      {floorData.ctaData.buttonText}
                    </button>
                  ) : (
                    <></>
                  )}
                </figure>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      {openModal && (
        <ModalComponent
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
};

export default FloorPlan;
