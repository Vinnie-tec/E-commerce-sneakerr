import React, { useState } from "react";
import BtnSliderR from "../UI/BtnSlider";

import styling from "./ProductGallery.module.css";

import images from "../../store/Data";

const MobileImageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    setSlideIndex(slideIndex !== images.length ? slideIndex + 1 : 1);
  };

  const prevSlide = () => {
    setSlideIndex(slideIndex !== 1 ? slideIndex - 1 : images.length);
  };

  return (
    <div className={styling.mobileImg}>
      {images.map((data, index) => {
        return (
          <div
            key={data.id}
            className={
              slideIndex === index + 1
                ? `${styling.shift} ${styling.activeAnimate}`
                : styling.shift
            }
          >
            <img
              src={process.env.PUBLIC_URL + `/Imgs/image${index + 1}.jpg`}
              alt={data.title}
              key={data.id}
            />
          </div>
        );
      })}
      <div className={styling.slideBtn}>
        <BtnSliderR moveSlide={prevSlide} direction={"prev"} />
        <BtnSliderR moveSlide={nextSlide} direction={"next"} />
      </div>
    </div>
  );
};

export default MobileImageSlider;
