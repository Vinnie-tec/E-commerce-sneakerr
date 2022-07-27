import { useState } from "react";
import CartIcon from "./CartIcon";
import styling from "./AddToCart.module.css";

import AddBtn from "../Assests/icon-plus.svg";
import SubtractBtn from "../Assests/icon-minus.svg";

const AddToCart = (props) => {
  const [count, setCount] = useState(0);

  var increment = () => setCount(count + 1);
  var decrement = () => setCount(count - 1);
  if (count <= 0) {
    decrement = () => setCount(0);
  }

  const addToCartHandler = (e) => {
    e.preventDefault();

    if (count === 0) {
      return;
    } else {
      setCount(0);
    }
    props.onAddToCart(count);
  };

  return (
    <div className={styling.addToCart}>
      <div className={styling.toggleButton} role="button">
        <button>
          <img src={SubtractBtn} alt="plus icon" onClick={decrement} />
        </button>
        <p role="presentation">{count}</p>
        <button>
          <img src={AddBtn} alt="plus icon" onClick={increment} />
        </button>
      </div>
      <button className={styling.addButton} onClick={addToCartHandler}>
        <span role="button">
          <CartIcon />
        </span>
        <span role='button'>Add to cart</span>
      </button>
    </div>
  );
};

export default AddToCart;
