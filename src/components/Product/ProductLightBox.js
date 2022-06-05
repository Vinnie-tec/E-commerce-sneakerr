import React, { useState } from "react";
import BtnSlider from "../UI/BtnSlider";

import Modal from "../UI/Modal";
import styling from "./ProductLightBox.module.css";

import images from "../../store/Data";

function ProductLightBox(props) {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    setSlideIndex(slideIndex !== images.length ? slideIndex + 1 : 1);
  };

  const  prevSlide = () => {
    setSlideIndex(slideIndex !== 1 ? slideIndex - 1 : images.length);
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <Modal onClick={props.onClose}>
      <div className={styling.gallery}>
        <div className={styling.image}>

          <div className={styling.closeBtn}>
            <button onClick={props.onClose}>
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#fff"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </div>
          
          {images.map((data, index) => {
            return (
              <div
                key={data.id}
                className={
                  slideIndex === index + 1 ? "slide active-animate" : "slide"
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
          <BtnSlider moveSlide={prevSlide} direction={"prev"} />
          <BtnSlider moveSlide={nextSlide} direction={"next"} />
        </div>

        <div className={styling.images}>
          {images.map(({image}, index) => (
            <div>
              <img
                key={index}
                src={image}
                alt="Shoes"
                onClick={() => moveDot(index + 1)}
                className={"hoverClass"} //for the hover state
                style={{
                  border:
                    slideIndex === index + 1
                      ? "3px solid hsl(26, 100%, 55%)"
                      : "",
                  opacity: slideIndex === index + 1 ? 0.5 : 1,
                  "--opacity": 0.5,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}

export default ProductLightBox;
