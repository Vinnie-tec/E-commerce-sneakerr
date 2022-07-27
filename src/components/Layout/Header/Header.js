import React, { useState, useContext, Fragment } from "react";
import CartIcon from "../../Cart/CartIcon";

import CartContext from "../../../store/cart-context";

import ProfilePix from "../../Assests/images/image-avatar.png";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderNavMobile from "./HeaderNavMobile";
import HeaderNav from "./HeaderNav";
import Cart from "../../Cart/Cart";

import styling from "./Header.module.css";

const Header = () => {
  const context = useContext(CartContext);

  const { items } = context;

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const [showCart, setShowCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const showCartHandler = () => {
    setShowCart((showCart) => !showCart);
  };

  const onOpenMenu = () => setOpenMenu(true);
  const onCloseMenu = () => setOpenMenu(false);

  const Backdrop = () => {
    return <div className={styling.backdrop}></div>;
  };

  return (
    <header className={styling.header}>
      {/* Mobile Nav Menu */}
      <div className={styling.mobileMenuBtn}>
        <button className={styling.btnIcon} onClick={onOpenMenu}>
          <HeaderMenu />
        </button>
        {openMenu && (
          <div className={styling.mobileMenu}>
            <HeaderNavMobile onClose={onCloseMenu} />
          </div>
        )}
      </div>

      <div className={styling.header_a}>
        <HeaderLogo />
        <HeaderNav />
      </div>
      <div className={styling.header_b}>
        <div className={styling.cartBadge}>
          <button className={styling.btnIcon} onClick={showCartHandler}>
            <CartIcon />
            <span>{numberOfCartItems}</span>
          </button>
          {/* CART BOX */}
          {showCart && (
            <Fragment>
              <Backdrop />
              <div className={styling.cartBox}>
                <Cart
                  onCancel={showCartHandler}
                  cartNumber={numberOfCartItems}
                />
              </div>
            </Fragment>
          )}
        </div>

        <div role="img" aria-label="Profile picture">
          <img src={ProfilePix} alt="ProfilePix" />
        </div>
      </div>
    </header>
  );
};

export default Header;
