import React, { useState, useContext } from "react";
import CartIcon from "../../Cart/CartIcon";

import CartContext from "../../../store/cart-context";

import ProfilePix from "../../Assests/images/image-avatar.png";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderNav from "./HeaderNav";
import Cart from "../../Cart/Cart";

import styling from "./Header.module.css";
import HeaderNavMobile from "./HeaderNavMobile";

const Header = () => {
  const context = useContext(CartContext);

  const { items } = context;

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart((showCart) => !showCart);
  };

  return (
    <header className={styling.header}>
      <div className={styling.mobileMenuBtn}>
        <HeaderMenu />
        <div className="mobileMenu">
          <HeaderNavMobile />
        </div>
      </div>
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
          <div className={styling.cartItems}>
            {showCart && (
              <Cart onCancel={showCartHandler} cartNumber={numberOfCartItems} />
            )}
          </div>
        </div>

        <div role="img" aria-label="Profile picture">
          <img src={ProfilePix} alt="ProfilePix" />
        </div>
      </div>
    </header>
  );
};

export default Header;
