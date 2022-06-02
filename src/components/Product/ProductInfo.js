import React from "react";
import AddToCart from "../Cart/AddToCart";

import styling from './ProductInfo.module.css';

const ProductInfo = () => {
  return (
    <div className={styling.aside}>
      <div className={styling.product_info}>
        <h4>Sneaker Company</h4>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      
      <div className={styling.pricing_info}>
        <h4>
          $125.00 <span>50%</span>
        </h4>
        <p>$250.00</p>
      </div>
      <AddToCart />
    </div>
  );
};

export default ProductInfo;
