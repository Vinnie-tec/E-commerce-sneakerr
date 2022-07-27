import React, {useState } from "react";
import BtnSliderR from "../UI/BtnSlider";

import styling from "./ProductGallery.module.css";

const MobileImageSlider = ({ Data }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    setSlideIndex(slideIndex !== Data.length ? slideIndex + 1 : 1);
  };

  const  prevSlide = () => {
    setSlideIndex(slideIndex !== 1 ? slideIndex - 1 : Data.length);
  };

  return (
    <div className={styling.mobileImg}>
      <div className={styling.shift}>
      {Data.map((data, index) => (
          <div
            key={data.id}
            className={
              slideIndex === index + 1 ? "slide active-animate" : "slide"
            }
          >
            <img
             src={data.image}
              alt={data.title}
              key={data.id}
            />
          </div>
        )
      )}
      </div>
      <div className={styling.slideBtn} role="button" aria-details="Button slider">
        <BtnSliderR moveSlide={prevSlide} direction={"prev"} />
        <BtnSliderR moveSlide={nextSlide} direction={"next"} />
      </div>
    </div>
  );
};

export default MobileImageSlider;
