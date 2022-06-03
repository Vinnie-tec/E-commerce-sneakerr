import React, { useState } from "react";
import ProductInfo from "./ProductInfo";
import styling from "./ProductGallery.module.css";

import Data from "../../store/image";

// import CartContext from "../../store/cart-context";

let [first_Element] = Data; //puling out the first object

if (!Array.isArray(first_Element)) {
  first_Element = [first_Element];
} // converting back to an array like object

const ProductGallery = (props) => {
  const [allInfo, setAllInfo] = useState({
    id: Data[0].id,
    image: Data[0].image,
    title: Data[0].title,
    description: Data[0].description,
    price: Data[0].price,
  });

  return (
    <main className={styling.main}>
      <div className={styling.gallery}>
        <div className={styling.image} key={allInfo.id}>
          <img src={allInfo.image} alt="Single shoe" onClick={props.onOpen} />
        </div>

        <div className={styling.images}>
          {Data.map((data, index) => (
            <img
              key={index}
              src={data.image}
              alt="Shoes"
              onClick={() => setAllInfo(data)}
              className={"hoverClass"}
              style={{
                border:
                  allInfo.image === props.image
                    ? "2px solid hsl(26, 100%, 55%)"
                    : "",
                opacity: allInfo.image === props.image ? 0.5 : 1,
                "--opacity": 0.5,
              }}
            />
          ))}
        </div>
      </div>

      <div className={styling.info}>
        <ProductInfo
          key={allInfo.id}
          title={allInfo.title}
          description={allInfo.description}
          id={allInfo.id}
          price={allInfo.price}
        />
      </div>
    </main>
  );
};

export default ProductGallery;
