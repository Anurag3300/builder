import { companyName } from "@/uitls/constant";
import React from "react";

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "Disclaimer",
            content: "This website is only for the purpose of providing information regarding real estate projects in different regions. By accessing this website, the viewer confirms that the information including brochures and marketing collaterals on this website is solely for informational purposes and the viewer has not relied on this information for making any booking/purchase in any project of the company. Nothing on this website constitutes advertising, marketing, booking, selling or an offer for sale, or invitation to purchase a unit in any project by the company. The company is not liable for any consequence of any action taken by the viewer relying on such material/ information on this website."
        },
        {
            title: "RERA Compliance Notice",
            content: "Please also note that the company has not verified the information and the compliances of the projects. Further, the company has not checked the RERA (Real Estate Regulation Act 2016) registration status of the real estate projects listed herein. The company does not make any representation in regards to the compliances done against these projects. You should make yourself aware about the RERA registration status of the listed real estate projects before purchasing property."
        },
        {
            title: "Privacy Policy Introduction",
            content: "In our endeavor and commitment of protecting your personal information, we have designed this comprehensive privacy policy. This is to keep your interests and information safe on our website."
        },
        {
            title: "Updation of Privacy Policy",
            content: "This privacy policy is subject to undergo change and review without any prior notice or approval. So to keep yourself updated on the changes introduced, please keep visiting and reviewing the terms and conditions of this privacy policy."
        },
        {
            title: "User Information",
            content: "By using our website, you agree to abide by the rules laid out by us and consent to collection and use of all such information that you may furnish to, or through, our website. In some cases, while you visit our website, you may not need to provide any personal information. But in certain instances, we must have your personal information in order for us to grant you access to some of the links or sites. Such links/ pages may ask for your name, e-mail address, phone number etc. The information furnished by you is used to provide relevant products and services and to acknowledge receipt of your communication or to send out information and updates to you. You have option of requesting removal from our mailing list. We do not give away your personal information to any third party."
        },
        {
            title: "Security",
            content: "To ensure security while transferring sensitive information, all the ongoing transmissions between client and server are encrypted using advanced and standard protocols. We also practice restricted access by employees and hold them to high levels of confidentiality. Use of cookies: We may use cookies for security, session continuity, and customization purposes. In case of a user opting to reject a cookie, he/ she may not be able to gain access to some of the limited services or use some features of the site."
        }
    ];

  return (
    <div className="flex flex-col gap-4 md:ml-24 md:mr-24 ml-8 mr-8 mb-8 mt-12 text-black border-b">
      <p className="font-bold text-4xl text-primary">Privacy Policy</p>

      {sections.map((section, idx) => (
        <div key={idx} className="mb-6">
          <p className="font-bold text-2xl text-primary mb-2">{section.title}</p>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
