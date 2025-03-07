import React from 'react';
import { companyName } from "@/uitls/constant";

const CookiesComponent = () => {
  const sections = [
    {
      title: "What Are Cookies",
      content: `Cookies are small text files that websites, including ${companyName}, send to your browsers when you visit them. They are stored on your computer or mobile device and contain information that the website can access when you revisit it later. Cookies serve various purposes, including enhancing your browsing experience and providing personalized content.`
    },
    {
      title: "How We Use Cookies",
      content: `At ${companyName}, we use cookies to improve your browsing experience, understand how you interact with our website, and provide personalized services. These cookies help us remember your preferences, maintain your session security, and deliver relevant content based on your interests.`
    },
    {
      title: "Types of Cookies We Use",
      content: "We utilize several types of cookies on our website: Session Cookies - Temporary cookies that are deleted when you close your browser, helping maintain continuity during your visit. Persistent Cookies - Cookies that remain on your device to remember your preferences for future visits. First-Party Cookies - Set directly by our website to improve your experience. Third-Party Cookies - Set by our trusted partners to help us analyze site usage and provide additional services."
    },
    {
      title: "Managing Your Cookie Preferences",
      content: "You have full control over how cookies are used when visiting our website. Most web browsers allow you to modify your cookie settings to accept, reject, or delete cookies. Please note that restricting cookies may impact your experience on our website and limit access to certain features."
    },
    {
      title: "Cookie Security",
      content: "We take the security of your data seriously. All cookies that contain sensitive information are encrypted, and we regularly review our cookie practices to ensure compliance with current privacy regulations and industry standards."
    },
    {
      title: "Updates to Cookie Policy",
      content: `${companyName} reserves the right to update this cookie policy at any time. We encourage you to periodically review this page to stay informed about how we use cookies and protect your privacy. Continued use of our website indicates your acceptance of our cookie practices.`
    }
  ];

  return (
    <div className="flex flex-col gap-4 md:ml-24 md:mr-24 ml-8 mr-8 mb-8 mt-12 text-black border-b">
      <p className="font-bold text-4xl text-primary">Cookie Policy</p>

      {sections.map((section, idx) => (
        <div key={idx} className="mb-6">
          <p className="font-bold text-2xl text-primary mb-2">{section.title}</p>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CookiesComponent;