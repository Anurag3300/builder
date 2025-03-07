// export default function WhyChoose(){

//     const chooseData =[{icon:"/madeIcon.avif", title:"Made In India", content:"Trusted quality and reliability from homegrown manufacturing" },
//         {icon:"/portableIcon.avif", title:"Portable & Lightweight", content:"Designed to be carried, stored, and used with ease" },
//         {icon:"/userFriendlyIcon.avif", title:"User-friendly", content:"Our extinguishers are designed to be intuitive and simple to use" },
//         {icon:"/stylishIcon.avif", title:"Stylish Design", content:"Blends effortlessly into any space without being intrusive" },
//        ]
//     return(
//         <div className="w-full h-[350px] flex-wrap">
//             <div className=" pt-4 text-center w-full text-gary-900 text-5xl"><span>Why Choose Us ?</span></div>
//             <div className="p-8 flex justify-around md:flex-row flex-col flex-wrap ">
//                { chooseData.map((items,index)=>
//                 <div key={index} className="flex flex-col p-4 justify-between w-[270px]  ">
//                     <div className="w-[80px] h-[80px] mx-auto  "><img src={items.icon}></img></div>
//                     <div className="text-xl text-gray-900 font-semibold text-center pt-6"><span>{items.title}</span></div>
//                     <div className="text-[16px] text-gray-700 text-center pt-2"><span>{items.content}</span></div>
//                 </div>
                
//                 )
//             }
//             </div>
//         </div>
//     )
// }



export default function WhyChoose() {
    const chooseData = [
      { icon: "/madeIcon.avif", title: "Made In India", content: "Trusted quality and reliability from homegrown manufacturing" },
      { icon: "/portableIcon.avif", title: "Portable & Lightweight", content: "Designed to be carried, stored, and used with ease" },
      { icon: "/userFriendlyIcon.avif", title: "User-friendly", content: "Our extinguishers are designed to be intuitive and simple to use" },
      { icon: "/stylishIcon.avif", title: "Stylish Design", content: "Blends effortlessly into any space without being intrusive" },
    ];
  
    return (
      
      <div className="w-full py-8 bg-white">
        <div className="text-center text-gray-900 text-3xl md:text-5xl font-bold mb-8">
          <span>Why Choose Us?</span>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap justify-center gap-6 px-4 md:px-8">
          {chooseData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-logobtbcolor p-6 rounded-2xl shadow-md w-64 md:w-72 transition-transform transform hover:scale-105"
            >
              <div className="w-20 h-20 mb-4">
                <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
              </div>
              <div className="text-xl text-gray-900 font-semibold text-center">
                <span>{item.title}</span>
              </div>
              <div className="text-base text-gray-300 text-center mt-2">
                <span>{item.content}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    );
  }
  