"use client";
import React, { useState } from "react";
import Navbar from "../Navbar";
import Testimonials from "../Testimonials";
import FAQs from "../FAQs";
import WhyChoose from "../WhyChoose";
import Numericals from "../Numericals";
import Certification from "../Certification";
import ProjectImage from "../ProjectImage";
import Value from "../Value";
import Carousal from "../Carousal";
import Highlights from "../Highlights";
import Amenities from "../Amenities";
import Locality from "../Locality";
import { IoMdAirplane } from "react-icons/io";
import { FaRoad, FaUniversity } from "react-icons/fa";
import About from "../About";
import Gallery from "../Gallery";
import FloorPlan from "../FloorPlan";
import Form from "../Form";
import ContactUs from "../ContactUs";
import Footer from "../Footer";
import { FaRegCopyright } from "react-icons/fa";
const Landingpage = () => {
  const [openModal, setOpenModal] = useState(false);
  const AmenitiesData = [
    {
      icon: "/0.webp",
      title: "24/7 Security",
      description: "24/7 security with CCTV and guards for total safety",
      accent: "from-gray-200 to-gray-300",
    },
    {
      icon: "/1.webp",
      title: "Spacious Garden",
      description: "Enjoy a spacious garden for relaxation and leisure.",
      accent: "from-gray-200 to-gray-300",
    },
    {
      icon: "/2.webp",
      title: "Open Gym",
      description: "Workout anytime in a spacious open gym",
      accent: "from-gray-200 to-gray-300",
    },
    {
      icon: "/3.webp",
      title: "Kid's Play area",
      description: "A vibrant play zone designed for kids' happiness",
      accent: "from-gray-200 to-gray-300",
    },
    {
      icon: "/6.webp",
      title: "Organic Farming",
      description: "Sustainable organic farming for a greener lifestyle",
      accent: "from-gray-200 to-gray-300",
    },
    {
      icon: "/7.webp",
      title: "Multipurpose Lawn",
      description: "erfect lawn for celebrations, yoga, and outdoor fun",
      accent: "from-gray-200 to-gray-300",
    },
    {
      icon: "/8.webp",
      title: "Basketball Court",
      description: "Stay active with a well-equipped basketball court",
      accent: "from-gray-200 to-gray-300",
    },
    {
      icon: "/9.webp",
      title: "Box Cricket",
      description:
        "Perfect pitch for exciting and competitive box cricket matches",
      accent: "from-gray-200 to-gray-300",
    },
    {
      icon: "/10.webp",
      title: "Lawn Tennis Court",
      description: "Ace your skills on a premium tennis court",
      accent: "from-gray-200 to-gray-300",
    },
    {
      icon: "/11.webp",
      title: "Badminton Court",
      description: "Perfectly designed badminton court for all skill levels",
      accent: "from-gray-200 to-gray-300",
    },
    {
      icon: "/12.webp",
      title: "Volleyball Court",
      description: "Bump, set, and spike on a professional volleyball court",
      accent: "from-gray-200 to-gray-300",
    },
  ];
  const locationData = [
    {
      id: "location-1",
      title: "IGI Airport",
      duration: "30 mins",
      icon: <IoMdAirplane className="w-4 h-4" />,
      color: "white",
    },
    {
      id: "location-2",
      title: "Rajiv Gandhi Education City",
      duration: "3 km",
      icon: <FaUniversity className="w-4 h-4" />,
      color: "white",
    },
    {
      id: "location-3",
      title: "NH44 (Delhi to Chandigarh) ",
      duration: "2.5 km",
      icon: <FaRoad className="w-4 h-4" />,
      color: "white",
    },
    {
      id: "location-4",
      title: " KMP - KGP Express Highway ",
      duration: "2 km",
      icon: <FaRoad className="w-4 h-4" />,
      color: "white",
    },
    {
      id: "location-5",
      title: "Right on 334B National Highway",
      duration: "5 km",
      icon: <FaRoad className="w-4 h-4" />,
      color: "white",
    },
    {
      id: "location-6",
      title: "Maruti IMT Kharkhoda ",
      duration: "15 mins",
      icon: <FaRoad className="w-4 h-4" />,
      color: "white",
    },
    {
      id: "location-7",
      title: " O.P. Jindal Law University",
      duration: "10 mins",
      icon: <FaUniversity className="w-4 h-4" />,
      color: "white",
    },
  ];
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className=" mx-auto">
        <div className="relative">
          <ProjectImage heroContentDesktop={"/"} />
        </div>
        <div className="relative">
          <Numericals />
        </div>
        <div className="relative">
          <About
            openModal={openModal}
            setOpenModal={setOpenModal}
            title={"About US"}
            subtitle={"About The Lending Page"}
            description={[
              "With over 25 years of industry expertise, we deliver dependable, compact, practical, and easy-to-use fire safety solutions that seamlessly integrate into your everyday life.",
              "We believe that fire safety should be readily accessible to everyone, not a hassle.",
              "That's why every product is rigorously tested to meet global standards for quality and reliability before it is delivered to you.",
            ]}
            backgroundData={"bg-slate-50"}
            ctaData={{
              buttonText: "Enquire",
              buttonClick: () => {
                setOpenModal(true);
              },
            }}
            asideContentData={{
              type: "carousel",
              url: "/about.webp",
              alt: "About",
            }}
          />
        </div>
        <div className="relative">
          <Highlights
            openModal={openModal}
            setOpenModal={setOpenModal}
            title={"Highlights"}
            description={[
              "With over 25 years of industry expertise, we deliver dependable, compact, practical, and easy-to-use fire safety solutions that seamlessly integrate into your everyday life.",
              "We believe that fire safety should be readily accessible to everyone, not a hassle.",
              "That's why every product is rigorously tested to meet global standards for quality and reliability before it is delivered to you.",
            ]}
            backgroundData={"bg-slate-50"}
            ctaData={{
              buttonText: "Enquire",
              buttonClick: () => {
                setOpenModal(true);
              },
            }}
            asideContentData={{
              type: "image",
              url: "/about.webp",
              alt: "About",
            }}
          />
        </div>
        <div>
          <Amenities
            Amenities={AmenitiesData}
            title={"Amenities"}
            subtitle={
              "Discover the exceptional features that make our township stand out"
            }
          />
        </div>
        <div>
          <Gallery />
        </div>
        <div>
          <Locality
            locations={locationData}
            title={"Connectivity on Your Doorstep"}
            mapImageUrl={"/location.webp"}
            ctaData={{
              buttonText: "Get Direaction",
              anchertag:
                "https://www.google.com/maps/place/28%C2%B023'54.3%22N+77%C2%B005'09.2%22E/@28.3984046,77.0833058,17z/data=!3m1!4b1!4m4!3m3!8m2!3d28.3984046!4d77.0858807?entry=ttu&g_ep=EgoyMDI1MDExNC4wIKXMDSoASAFQAw%3D%3D",
              buttonClick: () => {
                setOpenModal(true);
              },
            }}
          />
        </div>
        <div>
          <FloorPlan
            title={"Floor Plan"}
            subtitle={
              "Spacious layouts with large balconies, high ceilings, and modern interiors designed for comfortable living."
            }
            floorPlanData={[
              {
                url: "/floor1.webp",
                alt: "Floor Plan",
                figureText:
                  "2 and 3 BHK – Starting from 1,285 to 1,485 sq. ft.",
                ctaData: {
                  buttonText: "Download Brochure",
                  buttonClick: () => {
                    setOpenModal(true);
                  },
                },
              },
              {
                url: "/floor2.webp",
                alt: "Floor Plan",
                figureText: "4 BHK – Starting from 2,075 sq. ft.",
                ctaData: {
                  buttonText: "Download Brochure",
                  buttonClick: () => {
                    setOpenModal(true);
                  },
                },
              },
            ]}
          />
        </div>
        <div>
        <ContactUs title={"Contact Us"}/>
        </div>
        <div>
          <Footer companyAddress={"Big Growth Digital Dlf Square phase-2"} companyName={"Big Estate"} reraNumber={"123456"} reraWebsite={"bigestate.in"}  companyUrl={"xyz.com"} />
        </div>
        <div className="relative">
          <Certification />
        </div>

        <div className="relative">
          <WhyChoose />
        </div>
        <div className="relative">
          <Value />
        </div>
        <div className="relative">
          <Testimonials />
        </div>
        <div className="relative">
          <FAQs />
        </div>
        <div className="relative">
          <Carousal />
        </div>
      </div>
    </>
  );
};

export default Landingpage;
