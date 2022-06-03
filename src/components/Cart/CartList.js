import React from "react";
import styling from "./Cart.module.css";

import DelIcon from "../Assests/icon-delete.svg";

const CartList = (props) => {

  const price = `# ${props.price.toFixed(2)}`
  return (
      <div className={styling.main}>
        <div className={styling.img}>
          <img src="www.jpg" alt="img" />
        </div>

        <div className={styling.info}>
          <h3>{props.title}</h3>
          <div>
            <span>
              {price}  X{props.amount}
            </span>{" "}
            <span>{343}</span>
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
