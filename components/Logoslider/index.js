'use client'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Logoslider = () => {
  const logos = [
    "gal1.webp",
    "gal2.webp",
    "gal3.webp",
    "gal4.webp",
    "gal5.webp",
    "gal6.webp",
    "gal7.webp",
  ];

  const sliderSettings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 mb-8">
          Trusted by the world's most innovative teams
        </h2>
        <div className="max-w-[100vw] mx-auto">
          <Slider {...sliderSettings}>
            {logos.map((logo, index) => (
              <div key={index} className="px-4">
                <img
                  className="max-h-12 w-full object-contain"
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Logoslider;