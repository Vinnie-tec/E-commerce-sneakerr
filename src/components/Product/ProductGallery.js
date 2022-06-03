import React, { Fragment, useState } from "react";
import styling from "./ProductGallery.module.css";

import Images from "../../store/image";

const [  {image} ] = Images; //getting the first image in the list

const ProductGallery = (props) => {
  const [clickedImg, setClickedImg] = useState(image);

  return (
    <Fragment>
      <div className={styling.gallery}>
        <div className={styling.image} key={clickedImg}>
          <img src={clickedImg} alt="Single shoe" onClick={props.onOpen} />
        </div>

        <div className={styling.images}>
          {Images.map(({image}, index) => (
            <img
              key={index}
              src={image}
              alt="Shoes"
              onClick={() => setClickedImg(image)}
              className={'hoverClass'}
              style={{
                border:
                  clickedImg === image ? "2px solid hsl(26, 100%, 55%)" : "",
                opacity: clickedImg === image ? 0.5 : 1, '--opacity':0.5
              }}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductGallery;
