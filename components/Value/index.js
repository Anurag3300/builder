export default function Value() {
    const chooseData = [
      { icon: "./safty-first.avif", title: "Safety First", content: " Prioritizing your safety by offering handy and reliable fire extinguishers." },
      { icon: "./intergrity.avif", title: "Integrity", content: "A trusted manufacturer and exporter of globally-certified Made-In-India fire safety solutions" },
      { icon: "./accessibillity.avif", title: "Accessibility", content: "Creating cost-effective and user-friendly solutions to ensure fire safety for all." },
      { icon: "./convenience.avif", title: "Convenience:", content: "Modern and compact designs for effortless use and storage" },
    ];
  
    return (
   
  <div className="bg-gradient-to-b from-white to-gray-50 py-24" id="values">
    <div className="w-full py-8 bg-logobtbcolor">
    <div className="grid grid-cols-1 md:grid-cols-2  gap-6 px-4 md:px-8">
      {chooseData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-6 w-full"
        >
          <div className="text-5xl">
           <img src= {item.icon}></img>
          </div>
          <div className="text-2xl text-gray-900 font-semibold text-center mt-2">
            <span>{item.title}</span>
          </div>
          <div className="text-base text-gray-200 text-center mt-2 w-[400px]">
            <span>{item.content}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>
    );
  }
  