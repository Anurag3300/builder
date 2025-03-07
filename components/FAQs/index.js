"use client";
import React, { useState } from "react";
import { IoMdHelpCircle } from "react-icons/io";
import { FiPlus, FiMinus } from "react-icons/fi";
import Image from "next/image";

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-[#A3B1E0]/20 hover:bg-emerald-50/30 transition-all duration-300">
    <button
      className="w-full flex items-center py-6 px-6 gap-4"
      onClick={onClick}
    >
      <div className="flex-grow flex justify-between items-center">
        <h3 className={`${isOpen ? "font-bold": "font-medium"} text-left text-gray-800`}>
          {question}
        </h3>
        {isOpen ? (
          <FiMinus className="flex-shrink-0 ml-4 text-logobtbcolor text-xl" />
        ) : (
          <FiPlus className="flex-shrink-0 ml-4 text-logobtbcolor text-xl" />
        )}
      </div>
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <p className="px-6 pb-6 text-sm text-gray-600 leading-relaxed">
        {answer}
      </p>
    </div>
  </div>
);

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const faqData = [
    {
      question: "What types of fires can this extinguisher handle?",
      answer:
        "It is effective against Class A (solid materials like wood and paper) and Class B (flammable liquids like oil and petrol) fires.",
    },
    {
      question: "Is this extinguisher easy to use for beginners?",
      answer:
        "Yes, its lightweight, compact design and clear instructions make it user-friendly, even for first-time users.",
    },
    {
      question: " Can we keep and use this fire extinguisher in vehicles?",
      answer:
        "Absolutely! Its portable size makes it ideal for cars, bikes, and other vehicles.",
    },
    {
      question: " Does it require regular maintenance?",
      answer:
        "Minimal maintenance is needed. Routine checks ensure it's always ready to use. It’s also easy to recharge and service.",
    },
    {
      question: " Why should I choose this over other fire extinguishers?",
      answer:
        "It’s affordable, compact, portable, and meets the latest BIS standards, ensuring high performance and safety.",
    },
    {
      question: "How often should fire extinguishers be serviced?",
      answer:
        "Fire extinguishers should be inspected and serviced regularly to ensure they work when needed. During inspection you can check for damage, such as dents, cracks, or rust. Also, make sure the pressure gauge is in the green charged portion of the dial, and that the pin and tamper seal are in place and undamaged.",
    },
    {
      question: "How do you dispose of a fire extinguisher?",
      answer:
        "Fire extinguishers should be collected and disposed of in an environmentally sound way by your appointed Service Provider. A waste transfer note should be issued by your Service Provider to evidence that the extinguisher has been disposed of in accordance with regulations.",
    },
    {
      question:
        "Are fire extinguishers reusable once they’ve been partially used?",
      answer:
        "Many fire extinguishers can be recharged by a certified fire equipment dealer after they have been used, regardless of how much of the content was used. If you choose not to refill your used fire extinguisher, dispose of the extinguisher properly. Ensure you replace it with a new fire extinguisher immediately.",
    },


    {
      question:
        "Can fire extinguishers expire?",
      answer:
        "Yes, fire extinguishers can expire. Most have a lifespan of 5 to 15 years, but it's essential to check the manufacturer's instructions. Regular maintenance and inspections can help ensure they are in working order.",
    },
    {
      question:
        "How do I know if a fire extinguisher is not safe?",
      answer:
        "It can be difficult to determine if a fire extinguisher is safe to use, but a common indicator is the pressure gauge. Make sure that the pressure indicator is pointing to the green zone between the two different red zones. If you notice that the indicator is in either of the red zones, this means that the fire extinguisher needs to be serviced as soon as possible and should not be used.",
    },
    {
      question:
        "Is it dangerous to drop a fire extinguisher?",
      answer:
        "Since fire extinguishers are pressurized, dropping one may result in damage to the functionality of the extinguisher. If you accidentally drop a fire extinguisher, make sure that you keep it in an isolated area and contact a professional to handle it.",
    },
  ];

  return (
    <section className="py-20 md:px-8 px-2" id="faqs">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
            <IoMdHelpCircle className="text-logobtbcolor text-4xl md:text-5xl mb-2 md:mb-0" />
            <span>FAQs</span>
          </h2>
          <p className="text-gray-900 text-lg">
            Everything you need to know about{" "}
            <span className="text-logobtbcolor font-medium">
              ALFAFIRE
            </span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* <div className="md:w-1/2">
            <img
              src="/faq-image.jpg"
              alt="FAQs Illustration"
              className="object-fit "
            />
          </div> */}
          <div className="">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              {faqData.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={index === openIndex}
                  onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
