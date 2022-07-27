import React from "react";
import ProductGallery from "../../Product/ProductGallery";
// import ProductInfo from "../../Product/ProductInfo";
// import Modal from "../../UI/Modal";

import styling from './Main.module.css';

const Main = (props) => {
  return (
    <>
      <main className={styling.main} >
        <ProductGallery onOpen={props.onShow} />
      </main>
    </>
  );
};

export default Main;
