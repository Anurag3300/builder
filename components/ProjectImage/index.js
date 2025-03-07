"use client";
import React, { useEffect } from "react";
import ModalComponent from "../Modal";
import { HERO_CONTENT_TYPES } from "./enums";

const ProjectImage = ({ otpForm, heroContentDesktop, heroContentMobile, ctaData, openModal, setOpenModal }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpenModal(true);
    }, 5000); 
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="mt-12 py-10 flex md:flex-row flex-col md:justify-between justify-center gap-12 w-screen md:h-[95vh] h-full"
      id="home"
    >
      {heroContentDesktop && heroContentMobile && (
        <div className="h-full w-full items-center md:justify-center bg-background font-semibold text-primary gap-4 md:mb-8">
          {heroContentDesktop.type === HERO_CONTENT_TYPES.IMAGE ? (
            <img
              src={heroContentDesktop.url}
              className="md:block hidden md:h-[95vh] w-full object-cover"
              alt="Hero Desktop"
            />
          ) : heroContentDesktop.type === HERO_CONTENT_TYPES.VIDEO ? (
            <video
              src={heroContentDesktop.url}
              autoPlay={heroContentDesktop.autoPlay}
              loop={heroContentDesktop.loop}
              className="md:block hidden md:h-[95vh] w-full object-cover"
            />
          ) : heroContentDesktop.type === HERO_CONTENT_TYPES.CAROUSEL ? (
            <Carousel
              src={heroContentDesktop.url}
              className="md:block hidden md:h-[95vh] w-full object-cover"
            />
          ) : (<></>)}

          {heroContentMobile.type === HERO_CONTENT_TYPES.IMAGE ? (
            <img
              src={heroContentMobile.url}
              className="md:hidden mt-4 block h-[55vh] w-full object-cover"
              alt="Hero Mobile"
            />
          ) : heroContentMobile.type === HERO_CONTENT_TYPES.VIDEO ? (
            <video
              src={heroContentMobile.url}
              autoPlay={heroContentMobile.autoPlay}
              loop={heroContentMobile.loop}
              className="md:hidden block h-[55vh] w-full object-cover"
            />
          ) : heroContentMobile.type === HERO_CONTENT_TYPES.CAROUSEL ? (
            <Carousel
              src={heroContentMobile.url}
              className="md:hidden block h-[55vh] w-full object-cover"
            />
          ) : (<></>)}
        </div>
      )}

      {ctaData && ctaData.buttonText && ctaData.onClick ?(<button
        onClick={ctaData.onClick}
        className="z-20 md:block hidden bg-background rotate-90 fixed px-4 py-2 text-lg text-white md:top-96 top-72 -right-[3rem] hover:bg-heading transition-colors duration-500 ease-in-out"
      >
        {ctaData.buttonText}
      </button>):(<></>)}

      {openModal && (
        <ModalComponent otpForm={otpForm} openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </div>
  );
};

export default ProjectImage;
