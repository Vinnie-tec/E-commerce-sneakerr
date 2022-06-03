import React, { useState, useContext } from "react";
import CartIcon from "../../Cart/CartIcon";

import CartContext from "../../../store/cart-context";

import ProfilePix from "../../Assests/images/image-avatar.png";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import CartShop from "../../Cart/CartShop";

import styling from "./Header.module.css";

const Header = () => {
  const context = useContext(CartContext);

  const numberOfCartItems = context.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0)

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };
  return (
    <header className={styling.header}>
      <div className={styling.header_a}>
        <HeaderLogo />
        <HeaderNav />
      </div>
      <div className={styling.header_b}>
        <div className={styling.cart}>
          <button className={styling.btnIcon} onClick={showCartHandler}>
            <CartIcon />
            <span>{numberOfCartItems}</span>
          </button>
          <div className={styling.cartItems}>{showCart && <CartShop onClose={closeCartHandler} />}</div>
        </div>
        
        <div role="img" aria-label="Profile picture">
          <img src={ProfilePix} alt="ProfilePix" />
        </div>
      </div>
    </header>
  );
};

export default Header;
