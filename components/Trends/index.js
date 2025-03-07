import { CiCalendarDate } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";

const Trends = () => {
  let cards = [
    {
      date: "March 25, 2023",
      icon: <CiCalendarDate />,
      text: "Local SEO Checklist Steps Optimize Your Business Local For Searches.",
      iconArrow: <FaArrowRight />,
      searchIcons: [
        { fb: <FaFacebookF /> },
        { twiter: <IoLogoTwitter /> },
        { linkedin: <FaLinkedinIn /> },
      ],
      searchIcon: <LuShare2 />,
    },

    {
      date: "March 25, 2023",
      icon: <CiCalendarDate />,
      text: "The Role of SEO in Brand Building and Online Business Reputation.",
      iconArrow: <FaArrowRight />,
      searchIcons: [
        { fb: <FaFacebookF /> },
        { twiter: <IoLogoTwitter /> },
        { linkedin: <FaLinkedinIn /> },
      ],
      searchIcon: <LuShare2 />,
    },

    {
      date: "March 25, 2023",
      icon: <CiCalendarDate />,
      text: "SEO Content Marketing and Creating Valuable Content Searchable.",
      iconArrow: <FaArrowRight />,
      searchIcons: [
        { fb: <FaFacebookF /> },
        { twiter: <IoLogoTwitter /> },
        { linkedin: <FaLinkedinIn /> },
      ],
      searchIcon: <LuShare2 />,
    },
  ];

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center py-12">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center mb-8  font-serif">
        Trends and Predictions <br></br>for Online Success.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((items, index) => (
          <div
            key={index}
            className="bg-white md:flex-nowrap flex-wrap md:h-[350px] relative p-6 shadow-3xl rounded-lg flex flex-col hover:drop-shadow-2xl "
          >
            <div>
              <div className="flex items-center space-x-2 text-orange-500 mb-4">
                <span className="material-icons">{items.icon}</span>
                <span className="text-gray-600 text-sm ">{items.date}</span>
              </div>
              <h2 className="md:text-lg text-[16px] font-sans text-black mb-4 font-semibold leading-relaxed tracking-wider">
                <a href="#" className="hover:underline">
                  {items.text}
                </a>
              </h2>
            </div>

            <div className=" absolute bottom-[10px] ">
              <div className="flex justify-between items-center  text-black">
                <a
                  href="#"
                  className=" text-gray-900 font-medium inline-flex items-center"
                >
                  Learn More <span className="ml-2">{items.iconArrow}</span>
                </a>

                <div className="pl-[120px] group relative flex justify-around lg:gap-x-2">
                  <div className="flex justify-around lg:gap-x-2  opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full transition-all duration-300">
                    {items.searchIcons.map((icon, index) => (
                      <div key={index}>
                        {" "}
                        <div>
                          <a href="#">
                            <span className="material-icons">{icon.fb}</span>
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <span className="material-icons">
                              {icon.twiter}
                            </span>
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <span className="material-icons">
                              {icon.linkedin}
                            </span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="text-gray-900 hidden md:block font-medium hover:underline"
                  >
                    <span className="material-icons text-[14px]  md:text-[23px]">
                      {items.searchIcon}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trends;
