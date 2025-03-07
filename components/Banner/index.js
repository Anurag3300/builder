'use client'
import React, { useState } from "react";
import Logoslider from "../Logoslider";
import Count from "../Count";
import Button from "../Button";
import ModalComponent from "../Modal";

const Banner = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="relative isolate overflow-hidden bg-white" id="home">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent),radial-gradient(100%_100%_at_bottom_left,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" transform="rotate(180 50 50)" />
      </svg>
      <div className="mx-auto max-w-7xl px-6 lg:flex min-h-[85vh] items-center">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Campaigns That Drive Results, 
            <span className="block text-logobtbcolor">Automatically</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            End-to-end solutions powered by innovation, algorithms, and industry expertise.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button onClick={() => setOpenModal(prev => !prev)} variant="primary" className="rounded-md bg-logobtbcolor lg:px-[4rem] md:px-[3rem] px-[2rem] py-3 text-lg font-semibold text-white shadow-sm hover:bg-logobtbcolor-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-logobtbcolor">
              Get In Touch
            </Button>
          </div>
        </div>
        <div className="lg:flex-1 w-full">
            <img
              src="/banner-image.png"
              alt="App screenshot"
              className="w-full h-full object-cover"
            />
        </div>
      </div>
      <Count />
      <Logoslider />
      {
        openModal && <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />
      }
    </div>
  );
};

export default Banner;