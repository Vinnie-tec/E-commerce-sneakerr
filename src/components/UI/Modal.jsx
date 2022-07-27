import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import styling from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styling.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styling.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const portalLocation = document.getElementById("portal");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClick} />,
        portalLocation
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalLocation
      )}
    </Fragment>
  );
};

export default Modal;
