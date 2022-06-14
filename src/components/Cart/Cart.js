import React, { useContext, useState, useEffect } from "react";
import CartList from "./CartList";
import CheckOutForm from "./Checkout";

import styling from "./Cart.module.css";

import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    if (props.cartNumber === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [props.cartNumber]);

  const [CheckedOut, setCheckedOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const context = useContext(CartContext);
  const totalAmount = `# ${context.totalAmount.toFixed(2)}`; // getting the total amount value from the cart context

  const cartItemDeleteHandler = (id) => {
    context.deleteItem(id);
  };

  //MAPPING THE CART INFO
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

  const onCheckoutHandler = () => {
    //enable the checkout button only if there is an item present in
    if (props.cartNumber === 0) {
      setCheckedOut(false);
    } else {
      setCheckedOut(true);
    }
  };

  //SUBMITTING SUBMIT INFO TO BACKEND
  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://e-commerce-sneakers-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: context.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    context.clearCart();
  };

  const isEmptyModal = (
    <div className={styling.emptyDiv}>
      <p>Your cart is empty.</p>
    </div>
  );

  // CART INFO
  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={styling.total}>
        <span>Total Amount:  </span>
        <span>{totalAmount}</span>
      </div>
      {CheckedOut && (
        <CheckOutForm
          onClose={props.onCancel}
          onConfirm={submitOrderHandler}
          cartNumber={props.cartNumber}
        />
      )}
      {!CheckedOut && (
        <button className={styling.checkoutBtn} onClick={onCheckoutHandler}>
          Checkout
        </button>
      )}
    </React.Fragment>
  );

  //DISPLAYING SENDING STATUS INFO
  const isSubmittingModalContent = <p>Sending Order Data...</p>;
  const didSubmittingModalContent = (
    <React.Fragment>
      <p>
        <strong>Successfully send the order!</strong>
      </p>
      <div className={styling.actions}>
        <button className={styling.button} onClick={props.onCancel}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <div className={styling.cart}>
      <h4>Cart</h4>
      {isEmpty && isEmptyModal}
      {!isEmpty && !isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmittingModalContent}
    </div>
  );
};

export default Cart;
