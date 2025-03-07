
import { CiViewTimeline } from "react-icons/ci";
import { MdFireExtinguisher } from "react-icons/md";
import { SiDeliveroo } from "react-icons/si";
import { TbFlagDiscount } from "react-icons/tb";

export default function Numericals() {
    const chooseData = [
      { icon: <CiViewTimeline/>, title: "25+ YEARS", content: "Of Expertise" },
      { icon: < MdFireExtinguisher/>, title: "25K+", content: "Fire Extinguishers Supplied" },
      { icon: <SiDeliveroo/>, title: " 1M+", content: "Lives Protected" },
      { icon: <TbFlagDiscount/>, title: "4+", content: "Countries Served" },
    ];
  
    return (
      <div className="w-full py-8 bg-logobtbcolor">
       
        <div className="flex flex-wrap sm:flex-nowrap justify-center gap-6 px-4 md:px-8">
          {chooseData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center  p-6 w-64 md:w-72 "
            >
              <div className="text-5xl">
               {item.icon}
              </div>
              <div className="text-2xl text-gray-900 font-semibold text-center mt-2">
                <span>{item.title}</span>
              </div>
              <div className="text-base text-gray-900 text-center mt-2">
                <span>{item.content}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  