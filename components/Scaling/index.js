"use client";
import React, { useState } from "react";
import { FaChartLine, FaPalette, FaComments, FaSearch, FaUsers, FaBullseye, FaPencilAlt, FaRocket, FaRegFileAlt, FaRegLightbulb, FaRegComments, FaAd, FaChartPie } from "react-icons/fa";
import Button from "../Button";
import ModalComponent from "../Modal";

const Scaling = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const scalingData = [
    {
      name: "Brand Strategy",
      icon: <FaChartLine className="text-4xl" />,
      value: [
        { text: "Comprehensive Brand Audits", icon: <FaSearch className="text-logobtbcolor" /> },
        { text: "Competitor Research and Analysis", icon: <FaUsers className="text-logobtbcolor" /> },
        { text: "Strategic Brand Creation and Positioning", icon: <FaBullseye className="text-logobtbcolor" /> },
      ],
      cta: "Strategize Now",
    },
    {
      name: "Creative Services",
      icon: <FaPalette className="text-4xl" />,
      value: [
        { text: "Brand Identity and Corporate Identity Development", icon: <FaPencilAlt className="text-logobtbcolor" /> },
        { text: "Strategic Brand Activation Campaigns", icon: <FaRocket className="text-logobtbcolor" /> },
        { text: "Design and Development of Sales and Marketing Collaterals", icon: <FaRegFileAlt className="text-logobtbcolor" /> },
      ],
      cta: "Get Creative",
    },
    {
      name: "Communication Strategy",
      icon: <FaComments className="text-4xl" />,
      value: [
        { text: "Crafting Key Messages and Messaging Strategies", icon: <FaRegLightbulb className="text-logobtbcolor" /> },
        { text: "Creative Campaign Concept Development", icon: <FaRegComments className="text-logobtbcolor" /> },
        { text: "Campaign-Specific Collateral Creation", icon: <FaRegFileAlt className="text-logobtbcolor" /> },
        { text: "Innovative Advertising Concepts", icon: <FaAd className="text-logobtbcolor" /> },
      ],
      cta: "Communicate Better",
    },
  ];

  return (
    <div className="bg-[#e7f5f5] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="what we do">
      <div className="absolute inset-0 bg-opacity-50 bg-white backdrop-filter backdrop-blur-lg"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-buttonColor mb-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
            <FaChartPie className="text-logobtbcolor text-4xl md:text-5xl mb-2 md:mb-0" />
            <span>Scale Your <span className="text-logobtbcolor">Business</span></span>
          </h2>
          <p className="text-gray-600 text-lg">
            Discover how <span className="text-logobtbcolor font-medium">Big Growth Digital</span> can elevate your brand
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scalingData.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 ${
                index === 1 ? "ring-4 ring-logobtbcolor" : ""
              } flex flex-col`}
              onClick={() => setSelectedIndex(index)}
            >
              <div className="p-8 relative flex-grow">
                <div className="absolute top-0 right-0 w-24 h-24 bg-logobtbcolor opacity-10 rounded-bl-full"></div>
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-buttonColor to-logobtbcolor rounded-2xl mb-6 mx-auto shadow-lg">
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-center text-buttonColor mb-8">
                  {item.name}
                </h3>
                <ul className="space-y-6">
                  {item.value.map((subItem, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-4 text-logobtbcolor text-xl mt-1">{subItem.icon}</span>
                      <span className="text-gray-700 text-base leading-relaxed">{subItem.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-l from-buttonColor to-logobtbcolor p-6 mt-auto">
                <Button onClick={() => setOpenModal(prev => !prev)} variant="tertiary" className="w-full bg-white text-buttonColor hover:bg-gray-100 transition-colors duration-300">
                  {item.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {
        openModal && <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />
      }
    </div>
  );
};

export default Scaling;