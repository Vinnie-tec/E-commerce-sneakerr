import React from "react";
import styling from "./CartList.module.css";

import DelIcon from "../Assests/icon-delete.svg";

const CartList = (props) => {
  const price = `# ${props.price.toFixed(2)}`;
  const amount = props.amount;

  const a = props.price * amount;
  const itemTotalPrice = `# ${a.toFixed(2)}`;

  return (
    <div className={styling.main}>
      <div className={styling.img} role="img">
        <img src={props.image} alt="img" />
      </div>

      <div className={styling.info}>
        <h3>{props.title}</h3>
        <div className={styling.spans}>
          <span className={styling.spanA}>
            {price} <small> x </small>
            {props.amount}
          </span>{" "}
          <span className={styling.spanB}>{itemTotalPrice}</span>
        </div>
      </div>

      <div className={styling.closeButton} role="button">
        <button type="button" onClick={props.onDelete}>
          <img src={DelIcon} alt="btn" />
        </button>
      </div>
    </div>
  );
};

export default CartList;
