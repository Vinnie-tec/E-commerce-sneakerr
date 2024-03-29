import React, { useState } from "react";
import ProductInfo from "./ProductInfo";
import styling from "./ProductGallery.module.css";

import Data from "../../store/Data";
import MobileImageSlider from "./MobileImageSlider";

const ProductGallery = (props) => {
  const [allInfo, setAllInfo] = useState({
    id: Data[0].id,
    image: Data[0].image,
    title: Data[0].title,
    description: Data[0].description,
    price: Data[0].price,
    discount: Data[0].discount,
  });

  // const [slideIndex, setSlideIndex] = useState(1);

  return (
    <main className={styling.main}>
      <div className={styling.mobileImg}>
        <MobileImageSlider
          Data={Data}
        />
      </div>
      <div className={styling.gallery}>
        <div className={styling.image} key={Math.floor(Math.random() * 100)}>
          <img
            src={allInfo.image}
            alt="Single shoe"
            onClick={props.onOpen}
          />
        </div>

        <div className={styling.images}>
          {Data.map((data, index) => (
            <>
              <img
                key={index}
                src={data.image}
                alt="Shoes"
                onClick={() => setAllInfo(data)}
                className={"hoverClass"}
                style={{
                  border:
                    allInfo.image === data.image
                      ? "3px solid hsl(26, 100%, 55%)"
                      : "",
                  opacity: allInfo.image === data.image ? 0.5 : 1,
                  "--opacity": 0.5,
                }}
              />
            </>
          ))}
        </div>
      </div>

      <>
        <ProductInfo
          key={allInfo.id}
          title={allInfo.title}
          description={allInfo.description}
          id={allInfo.id}
          price={allInfo.price}
          image={allInfo.image}
          discount={allInfo.discount}
        />
      </>
    </main>
  );
};

export default ProductGallery;
