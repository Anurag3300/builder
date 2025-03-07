import React from 'react';
import { companyName } from "@/uitls/constant";

const TermsAndConditionsComponent = () => {
  const sections = [
    {
      title: "Welcome",
      content: `Welcome to ${companyName}. These terms and conditions outline the rules and regulations for the use of our website.`
    },
    {
      title: "Terminology",
      content: `"Client", "You" and "Your" refers to you, the person accessing this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves.`
    },
    {
      title: "Cookies",
      content: `We employ the use of cookies. By accessing ${companyName}, you agreed to use cookies in agreement with our Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable functionality of certain areas and improve user experience.`
    },
    {
      title: "License",
      content: `Unless otherwise stated, ${companyName} and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this website for your own personal use subjected to restrictions set in these terms and conditions.`
    },
    {
      title: "Restrictions",
      content: "You must not: Republish material from our website, Sell, rent or sub-license material from our website, Reproduce, duplicate or copy material from our website, Redistribute content from our website."
    },
    {
      title: "Content Liability",
      content: "We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that arise on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights."
    },
    {
      title: "Reservation of Rights",
      content: `We reserve the right to request removal of all links or any particular link to our Website. We also reserve the right to amend these terms and conditions at any time. By continuously linking to our Website, you agree to be bound to and follow these terms and conditions.`
    },
    {
      title: "Disclaimer",
      content: "To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date."
    }
  ];

  return (
    <div className="flex flex-col gap-4 md:ml-24 md:mr-24 ml-8 mr-8 mb-8 mt-12 text-black border-b">
      <p className="font-bold text-4xl text-primary">Terms and Conditions</p>

      {sections.map((section, idx) => (
        <div key={idx} className="mb-6">
          <p className="font-bold text-2xl text-primary mb-2">{section.title}</p>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default TermsAndConditionsComponent;