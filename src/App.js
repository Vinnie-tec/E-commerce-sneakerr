import React, { Fragment, useState} from "react";
import ProductLightBox from './components/Product/ProductLightBox';
import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/MainPage/Main";

const App = () => {
  
  const [showModal, setShowModal] = useState(false);

  const onOpenModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      {showModal && <ProductLightBox onClose={onCloseModal}/>}
      <Header />
      <Main onShow={onOpenModal}/>
      {/* <ProductLightBox /> */}
    </Fragment>
  );
};

export default App;
