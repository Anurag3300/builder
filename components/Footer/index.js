import Link from "next/link";
import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = (props) => {
    const {companyAddress, companyName, reraNumber, reraWebsite,companyUrl } = props;
  let url;

  if(typeof window !== 'undefined') {
    url = window.location.origin;
  }

  const year = new Date().getFullYear();
  return (
    <div className="bg-background text-black w-full flex flex-col gap-4 md:mb-0 mb-10">
      <h1 className="mx-10 text-xl font-bold">Disclaimer:</h1>
      <p className="mt-4 mb-4 md:ml-10 md:mr-10 ml-4 mr-4 md:text-left text-center text-sm text-heading">
        All information, images and visuals, designs and drawings, plans or
        sketches are only representative, an architect’s impression or artistic
        renderings and not to scale. Interior and Accessories shown in the Show
        Apartment are illustrative and indicative only. Areas and land outside
        the periphery/ boundary of the Project are indicative and no right is
        created thereon. Nothing contained herein intends to constitute a legal
        offer and does not form part of any legally binding agreement.
        Recipients/ viewers are advised to exercise their discretion in relying
        on the information provided and are requested to verify all the details,
        specifications, including common areas, landscapes, amenities and
        facilities, services, payment plans and other relevant terms
        independently with the Promoter, have thorough
        understanding of the same and take appropriate advice prior to
        concluding any decision for buying in the Project. Registration No.
        {reraNumber} available at {reraWebsite}. For more information
        please visit - <a href={companyUrl}>{companyUrl}</a> Project address - {companyAddress}. Terms and conditions apply.
      </p>

      <div className="border-t border-gray-200">
        <div className="m-6 flex flex-wrap items-center justify-center gap-4 text-sm">
          <Link href="/privacy-policy" className="hover:text-blue-600 transition-colors"> 
            Privacy Policy 
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/terms-and-conditions" className="hover:text-blue-600 transition-colors"> 
            Terms & Conditions 
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/cookies-policy" className="hover:text-blue-600 transition-colors"> 
            Cookies Policy 
          </Link>
          <span className="text-gray-300">|</span>
          <div className="flex items-center gap-2">
            <FaRegCopyright className="text-gray-600" />
            <span>
              {year} {companyName}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
