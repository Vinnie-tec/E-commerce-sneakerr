import React from "react";
import styling from "./Cart.module.css";

import DelIcon from "../Assests/icon-delete.svg";

const CartList = (props) => {

  const price = `# ${props.price.toFixed(2)}`
  const amount = props.amount;

  const itemPrice = props.price * amount;


  return (
      <div className={styling.main}>
        <div className={styling.img}>
          <img src={props.image} alt="img" />
        </div>

        <div className={styling.info}>
          <h3>{props.title}</h3>
          <div>
            <span>
              {price}  X{props.amount}
            </span>{" "}
            <span>{itemPrice}</span>
          </div>
        </div>

        <div className={styling.closeButton}>
          <button type="button" onClick={props.onDelete}>
            <img src={DelIcon} alt="btn" />
          </button>
        </div>
    </div>
  );
};

export default CartList;
