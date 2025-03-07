'use client'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SLIDES } from "@/uitls/constant";

const DevelopersSlider = () => {
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
    <div className="py-12 sm:py-16 m-6" id='clients'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl md:leading-[3.25rem] text-center text-buttonColor font-bold mb-12">
          Our <span className='text-logobtbcolor'>Clients</span>
        </h1>
        <div className="max-w-[100vw] mx-auto">
          <Slider {...sliderSettings}>
            {SLIDES.map((logo, index) => (
              <div key={index} className="px-4">
                <img
                  className="max-h-16 w-full object-contain mx-auto transition-all duration-300 ease-in-out filter grayscale hover:grayscale-0 hover:scale-110"
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default DevelopersSlider;