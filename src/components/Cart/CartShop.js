import React from "react";

import styling from "./CartShop.module.css";

import DelIcon from "../Assests/icon-delete.svg";

const CartShop = () => {
  const cartItems = [{ id: "1", name: "Vincent", price: 1425, amount: 2 }].map(
    (item) => <li>{item.name}</li>
  );
  return (
    <div className={styling.cart}>
      <h2>Cart</h2>

      <div className={styling.main}>
        <div className={styling.img}>
          <img src="www.jpg" alt="img" />
        </div>

        <div className={styling.info}>
          <h3>{cartItems}</h3>
          <div>
            <span>$125.00 X{3}</span> <span>$375.00</span>
          </div>
        </div>

        <div className={styling.closeButton}>
          <button type="button" >
            <img src={DelIcon} alt="btn" />
          </button>
        </div>
      </div>

      <button className={styling.checkoutBtn}>Checkout</button>
    </div>
  );
};

export default CartShop;
