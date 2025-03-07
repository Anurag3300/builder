

// export default function Certification() {
   
  
//     return (
//       <div className=" mt-8 w-full md:h-[300px] py-8 bg-logobtbcolor">
//          <div className="text-center text-gray-900 text-3xl md:text-5xl font-bold mb-8">
//           <span>Certification</span>
//         </div>
//         <div className="flex flex-wrap justify-center items-center">
//          <span>ISO 9001:2015, IS 15683:2018, CE, ISI, BIS, SSI, and NSIC</span>
//         </div>
//       </div>
//     );
//   }
  





export default function Certification() {
  const certifications = [
    "ISO 9001:2015, IS 15683:2018, CE, ISI, BIS, SSI, and NSIC"
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24" id="certification">
   <div className="mt-8 w-full h-[250px] py-8 bg-logobtbcolor">
      <h2 className="text-center text-gray-900 text-3xl md:text-5xl font-bold mb-6">
        Certification
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 px-4 m-12">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-900 text-gray-100 shadow-md rounded-xl px-6 py-3 text-sm md:text-base font-semibold hover:shadow-xl transition-shadow"
          >
            {cert}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
