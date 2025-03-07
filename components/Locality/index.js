"use client";
import React from "react";
import react from "react"
const Locality = (props) => {
    // console.log(props)
  const { locations, mapImageUrl, subtitle, title, ctaData } = props;
  return (
    <div
      className="relative bg-gradient-to-b from-white to-gray-50 py-12 sm:py-20"
      id="location"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-16">
          {title ?
          (<h2 className="md:text-5xl text-3xl font-semibold text-black hover:text-background/80 uppercase mb-4">
            {title}
          </h2>):(<></>)
          }
          {subtitle ?
          (<h2 className="md:text-5xl text-3xl font-semibold text-background hover:text-background/80 uppercase mb-4">
            {subtitle}
          </h2>):(<></>)
          }
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-12 items-center">
          {/* Image Section */}
          {mapImageUrl ? (<div className="lg:w-1/2 relative lg:sticky lg:top-24 mb-6 lg:mb-0">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
            <img
              src={mapImageUrl}
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
              alt={mapImageUrl}
            />
             {ctaData ? (<div className="absolute bottom-2 right-2  bg-background  text-black bg-opacity-70 text-xl px-6 py-4 rounded font-bold">
                {ctaData.anchertag?
                (<a href="https://www.google.com/maps/place/28%C2%B023'54.3%22N+77%C2%B005'09.2%22E/@28.3984046,77.0833058,17z/data=!3m1!4b1!4m4!3m3!8m2!3d28.3984046!4d77.0858807?entry=ttu&g_ep=EgoyMDI1MDExNC4wIKXMDSoASAFQAw%3D%3D">Get Direction</a>):(ctaData. buttonText)}
            </div>):(<></>)}
          </div>):(<></>)}

          {/* Content Section - Updated sizing and centering */}
          <div className="lg:w-1/2 h-full flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-2 w-full">
              {locations && locations.length ? (locations.map((location) => (
                <div
                  key={location.id}
                  className="group hover:bg-white transition-all duration-300 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-lg overflow-hidden"
                >
                  <div className="w-full h-[24px] p-8 flex items-center gap-4 border-b-2">
                    {location.icon && location.color ? (<div
                      className={`w-16 h-16 rounded-full bg-${location.color ? location.color : white}-500/10 flex items-center justify-center flex-shrink-0`}
                    >
                      {React.cloneElement(location.icon, {
                        className: `w-5 h-5 text-${location.color}-600`,
                      })}
                    </div>) :(<></>)}
                    <div className="min-w-0">
                      {location.title ? (<h3 className="text-sm font-semibold text-gray-900 truncate">
                        {location.title}
                      </h3>) :(<></>)}
                      {location.duration? (<p className="text-base text-gray-600">
                        {location.duration}
                      </p>):(<></>)}
                    </div>
                  </div>
                </div>
              ))):(<></>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default  Locality ;
