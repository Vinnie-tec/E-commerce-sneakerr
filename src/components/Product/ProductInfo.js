import { useContext } from "react";
import React from "react";
import AddToCart from "../Cart/AddToCart";
import CartContext from '../../store/cart-context';

import styling from './ProductInfo.module.css';


const ProductInfo = (props) => {
  const context = useContext(CartContext);
  const price = `# ${props.price.toFixed(2)}`
  const discountprice = (props.discount / 100) * props.price
  const discountPrice = `# ${discountprice}`
 

  const addToCartHandler = count => {
    context.addItem({
      id: props.id,
      title: props.title,
      amount: count,
      price: discountprice,
      image: props.image,
    })
  }
  
  return (
    <div className={styling.aside}>
      <div className={styling.product_info}>
        <h4>Sneaker Company</h4>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      
      <div className={styling.pricing_info}>
        <h4>
         {discountPrice} <span>{`${props.discount} %`}</span>
        </h4>
        <p>{price}</p>
      </div>
      <AddToCart onAddToCart={addToCartHandler}/>
    </div>
  );
};

export default ProductInfo;
