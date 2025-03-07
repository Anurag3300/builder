"use client";
import { navData } from "@/uitls/constant";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../Button";
import ModalComponent from "../Modal";
import MobileMenu from "../Sidebar";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleGetStarted = () => {
    setOpenModal(true);
  };

  return (
    <>
      <nav className={`w-screen border-b bg-white`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img src="/logo-dark.webp" alt="logo" className="w-[180px] object-contain" />
              </a>
            </div>

            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navData.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className={`text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group`}
                  >
                    {item}
                    <span className={`absolute bottom-0 left-0 h-0.5 w-0 bg-logobtbcolor transition-all duration-300 group-hover:w-full`}/>
                  </a>
                ))}
              </div>
            </div>

            <Button onClick={handleGetStarted} className="bg-green-500 text-white lg:block hidden">
              Enquire now !
            </Button>

            <div className="lg:hidden">
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="text-gray-800 hover:text-logobtbcolor focus:outline-none"
              >
                <RxHamburgerMenu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu 
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onGetStarted={handleGetStarted}
      />

      {openModal && <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />}
    </>
  );
};

export default Navbar;