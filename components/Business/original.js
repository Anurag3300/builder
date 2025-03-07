'use client'
import { useState } from "react";
import Acc from "./acc";

const Original = () => {
    const CompetitorData = [
        {
            title: "Brand Strategy",
            content: ["Comprehensive Brand Audits", "Competitor Research and Analysis" ,"Strategic Brand Creation and Positioning"]
          },
          {
            title: "Creative Services",
            content: ["Brand Identity and Corporate Identity Development", "Strategic Brand Activation Campaigns","Design and Development of Sales and Marketing Collaterals"]
          },
          {
            title: "Communication Strategy",
            content: ["Crafting Key Messages and Messaging Strategies", "Creative Campaign Concept Developmentt", "Campaign-Specific Collateral Creation" , "Innovative Advertising Concepts"]
          },
    ]

    return (

        <div className=' border to-white rounded-lg md:px-8 px-6 py-4  m-4 -mt-4 flex flex-col '>
            <div className='p-10 flex justify-between flex-col md:flex-row  gap-x-40'>
                <div className=" w-full">

                   <Acc items={CompetitorData}/>
                </div>
                <div className="flex flex-col mt-4">
                        <div>
                           <h2 className="font-sans tracking-wide text-2xl md:text-5xl font-semibold text-gray-600">Our Business-<br></br>Friendly Pricing Solutions. </h2>
                           <br></br>
                           <br></br>
                           <p className=" font-sans leading-relaxed tracking-wide md:text-xl text-[12px] text-gray-600">Praesent mollis tortor augue, lacinia vestibulum sem cursus sed. Suspendisse quis sapien sed odio dictum fringilla eget eget ligula Duis varius ornare quam, interdum libero elementum bibendum arcu efficitur vehicula.</p>
                        </div>
                        <div >
                          <img src="faq-image.jpg" alt="faq-image-loading"></img>
                        </div>
                </div>
            </div>
        </div>














    )

}

export default Original