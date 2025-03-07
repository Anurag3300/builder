"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaEnvelope, FaPhone, FaCommentAlt } from "react-icons/fa";

const Form = ({ onSubmit, setOpenModal }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const parseMobileNumber = (number) => number.replace(/\D/g, "");

  const POST = async (url, data) => {
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { fullName, email, mobileNumber, message } = formData;
    const parsedNumber = parseMobileNumber(mobileNumber);

    if (isNaN(parsedNumber) || parsedNumber.length < 10) {
      setError(true);
      setErrorMessage("Invalid Mobile Number");
      setIsSubmitting(false);
      return;
    }

    let gtmEventData = {
      fullName,
      email,
      mobileNumber: parsedNumber,
      message,
      page_url: window.location.href,
    };

    try {
      await POST("", {
        email,
        phone: parsedNumber,
        fullName,
        message,
        "Page URL": window.location.href,
      });

      // Reset form
      setFormData({ fullName: "", email: "", mobileNumber: "", message: "" });

      // Google Tag Manager Event (if applicable)
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "submit_lead_form",
          ...gtmEventData,
        });
      }

      if (setOpenModal) setOpenModal(false);
      router.push("/thank-you");
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-8 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center text-black mb-6">
        Enquire now
      </h2>

      {error && <p className="text-black text-sm">{errorMessage}</p>}

      <div className="relative">
        <FaUser className="absolute top-3 left-3 text-black" />
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:border-black bg-transparent text-buttonColor placeholder-gray-400 outline-none"
          placeholder="Full Name"
        />
      </div>

      <div className="relative">
        <FaEnvelope className="absolute top-3 left-3 text-black" />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:border-black bg-transparent text-buttonColor placeholder-gray-400 outline-none"
          placeholder="Email Address"
        />
      </div>

      <div className="relative">
        <FaPhone className="absolute top-3 left-3 text-black" />
        <input
          type="tel"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:border-black bg-transparent text-buttonColor placeholder-gray-400 outline-none"
          placeholder="Mobile Number"
          required
        />
      </div>

      <div className="relative">
        <FaCommentAlt className="absolute top-3 left-3 text-black" />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:border-black bg-transparent text-buttonColor placeholder-gray-400 outline-none resize-none"
          placeholder="Your message here..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-black text-white font-semibold py-3 px-6 rounded-full hover:opacity-90 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-logobtbcolor"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default Form;
