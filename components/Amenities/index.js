"use client";
import React from "react";


const Amenities = (props) => {
    const {Amenities,title,subtitle,icons,description,ctaData,} = props
  return (
    <section className="md:py-24 py-4 relative bg-gray-50 md:px-16 px-4" id="highlights">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          {title?(<h2 className="text-5xl font-semibold mb-6">
            {title}
          </h2>):(<></>)}
          {subtitle?(<p className="text-gray-600 text-lg">
            {subtitle}
          </p>):(<></>)}
        </div>

        {/* Single row grid for all items */}
        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {Amenities && Amenities.length ? (Amenities.map((amenitieData, amenitieIdx) => (
            <AmenitiesItem key={amenitieIdx} amenitie={amenitieData} />
          ))):(<></>)}
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-primary/5 to-transparent rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

const AmenitiesItem = ({ amenitie }) => {
  if (!amenitie) return <></>;

  return (
    <div className="group relative p-4">
      <div className="mb-4 relative">
        <div
          className={`w-14 h-14 flex items-center justify-center text-2xl
          bg-gradient-to-br ${amenitie.accent} text-white rounded-xl
          transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 mx-auto`}
        >
          {amenitie.icon ? (
            <img src={amenitie.icon} alt={amenitie.title} className="w-10 h-10" />
          ) : null}
        </div>
        <div
          className={`absolute inset-0 bg-gradient-to-br ${amenitie.accent} 
          blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
        ></div>
      </div>

      <div className="space-y-2 text-center">
        <h3 className="text-lg font-semibold tracking-tight">{amenitie.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{amenitie.description}</p>
        <div
          className={`h-1 w-12 bg-gradient-to-r ${amenitie.accent} rounded-full 
          transform origin-center transition-all duration-300 group-hover:w-20 mx-auto`}
        ></div>
      </div>
    </div>
  );
};


export default Amenities;
