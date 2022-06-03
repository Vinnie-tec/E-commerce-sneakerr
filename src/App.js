import React, { useState} from "react";
import ProductLightBox from './components/Product/ProductLightBox';
import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/MainPage/Main";
import CardProvider from "./store/CartProvider";


const App = () => {
  const [showModal, setShowModal] = useState(false);

  const onOpenModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <CardProvider>
      {showModal && <ProductLightBox onClose={onCloseModal}/>}
      <Header />
      <Main onShow={onOpenModal}/>
    </CardProvider>
  );
};

export default App;
