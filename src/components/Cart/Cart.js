import React, { useContext } from "react";
import CartList from "./CartList";

import styling from "./Cart.module.css";

import CartContext from "../../store/cart-context";

const CartShop = (props) => {
  const context = useContext(CartContext);

  const totalAmount = `$ ${context.totalAmount.toFixed(2)}`;

  const cartItemDeleteHandler = (id) => {
    context.deleteItem(id);
  };

  const cartItems = (
    <div className={styling.items}>
      {context.items.map((item) => (
        <CartList
          key={item.id}
          title={item.title}
          amount={item.amount}
          price={item.price}
          image={item.image}
          onDelete={cartItemDeleteHandler.bind(null, item.id)}
        />
      ))}
    </div>
  );

  return (
    <div className={styling.cart}>
      <h2>Cart</h2>

      {cartItems}
      <div className={styling.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <button className={styling.checkoutBtn}>Checkout</button>
    </div>
  );
};

export default CartShop;
