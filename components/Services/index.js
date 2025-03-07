"use client";
import React, { useState } from "react";
import { FaSearchDollar, FaChartLine, FaRobot, FaTools } from 'react-icons/fa';
import Button from '../Button';
import ModalComponent from "../Modal";

const Services = () => {
  const [openModal, setOpenModal] = useState(false);

  const serviceData = [
    {
      name: "Branding That Commands Attention",
      icon: <FaSearchDollar className="text-4xl text-white" />,
      title: "Build a brand that stands out.",
      value: "Our expertise ensures your real estate projects shine with striking visuals and a unique identity that connects with your audience.",
    },
    {
      name: "Marketing That Drives Expansion",
      icon: <FaChartLine className="text-4xl text-white" />,
      title: "Fueling Growth with Scalable Strategies",
      value: "Every campaign is optimised for success, driving attention to your projects and delivering measurable, impactful results.",
    },
    {
      name: "Automation That Delivers",
      icon: <FaRobot className="text-4xl text-white" />,
      title: "Achieve Effortless Growth with the #1 PropTech Solution",
      value: "Our systems streamline communication, nurture leads, and drive conversions—leaving you more time to focus on scaling.",
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-[#e7f5f5]" id="services">
       <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-buttonColor mb-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
          <FaTools className="text-logobtbcolor text-4xl md:text-5xl mb-2 md:mb-0" />
          <span>Our Services</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Empowering your real estate success with{" "}
          <span className="text-logobtbcolor font-medium">
            cutting-edge solutions
          </span>
        </p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
              <div className="bg-gradient-to-r from-buttonColor to-logobtbcolor p-6 flex flex-col items-start justify-between h-48">
                <div className="bg-white bg-opacity-20 rounded-full p-4 inline-block mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white text-">
                  {service.name}
                </h3>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-semibold text-buttonColor mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-6 flex-grow">{service.value}</p>
                <div className="mt-auto">
                  <Button onClick={() => setOpenModal(prev => !prev)} variant="primary" size="medium">
                    Learn More
                  </Button>
                </div>
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

export default Services;