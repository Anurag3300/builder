import React from "react";
import Carousal from "../Carousal";
const Gallery = (props) => {
    const {title,subtitle,ctaData} = props;
  return (
    <div className="flex flex-col items-center text-background" id="gallery">
      <p className="flex text-center text-4xl mb-4 font-semibold"> GALLERY </p>
        <Carousal/>
    </div>
  );
};

export default Gallery;
