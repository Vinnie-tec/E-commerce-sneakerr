import React from "react";
import styling from "./BtnSlider.module.css";

const rightSvgBtn = (
  <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg" className={styling.svg}>
    <path
      d="M11 1 3 9l8 8"
      stroke="#1D2026"
      strokeWidth="3"
      fill="none"
      fillRule="evenodd"
    />
  </svg>
);

const leftSvgBtn = (
  <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg" className={styling.svg}>
    <path
      d="m2 1 8 8-8 8"
      stroke="#1D2026"
      strokeWidth="3"
      fill="none"
      fillRule="evenodd"
    />
  </svg>
);

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <div className={direction === "next" ? styling.nextBtnN : styling.prevBtnN}>
      <button onClick={moveSlide}>
        {direction === "prev" ? leftSvgBtn : rightSvgBtn}
      </button>
    </div>
  );
};

export default BtnSlider;

// FOR MOBILE SLIDE //
export const BtnSliderR = ({ direction, moveSlide }) => {
  return (
    <div className={direction === "next" ? styling.nextBtn : styling.prevBtn}>
      <button onClick={moveSlide}>
        {direction === "prev" ? leftSvgBtn : rightSvgBtn}
      </button>
    </div>
  )
}