import React from 'react';
import { navData } from "@/uitls/constant";
import { RxCross2 } from "react-icons/rx";
import Button from "../Button";

const MobileMenu = ({ isOpen, onClose, onGetStarted }) => {
  return (
    <div 
      className={`fixed inset-0 z-50 bg-white transition-opacity duration-300 ease-in-out ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div 
        className={`absolute inset-y-0 right-0 w-full bg-white shadow-xl transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="text-gray-800 hover:text-logobtbcolor focus:outline-none">
            <RxCross2 className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4 mt-8">
          {navData.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              onClick={onClose}
              className="text-gray-800 hover:text-logobtbcolor px-3 py-2 text-lg font-medium"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;