import React, { useRef, useState, useEffect } from "react";

import styling from "./Checkout.module.css";

const valid = (value) => value.trim() !== "" && value.trim().length >= 5;
const ValString = (value) =>
  value.trim() !== "" &&
  value.trim().length >= 5 &&
  !value.includes("1") &&
  !value.includes("2") &&
  !value.includes("3") &&
  !value.includes("4") &&
  !value.includes("5") &&
  !value.includes("6") &&
  !value.includes("7") &&
  !value.includes("8") &&
  !value.includes("9") &&
  !value.includes("@") &&
  !value.includes("0");
const isFiveChar = (value) => value.trim().length === 5;

const Checkout = (props) => {
  // enable checkout button only if there is an item inside the cart
  const [canCheckout, setCanCheckout] = useState(true);
  useEffect(() => {
    if (props.cartNumber === 0) {
      setCanCheckout(false);
    } else {
      setCanCheckout(true);
    }
  }, [props.cartNumber]);

  // form display
  const [formInputValidity, setFormInputValidity] = useState({
    name: true, // set to true so that error message wont be shown at the beginning
    address: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredPostalCodeIsValid = isFiveChar(enteredPostalCode);
    const enteredAddressIsValid = valid(enteredAddress);
    const enteredNameIsValid = ValString(enteredName);
    const enteredCityIsValid = ValString(enteredCity);

    setFormInputValidity({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid &&
      enteredAddressIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      address: enteredAddress,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  // form styling for invalid inputs field
  const nameControlClasses = `${styling.control} ${
    formInputValidity.name ? "" : styling.invalid
  }`;
  const addressControlClasses = `${styling.control} ${
    formInputValidity.address ? "" : styling.invalid
  }`;
  const postalCodeControlClasses = `${styling.control} ${
    formInputValidity.postalCode ? "" : styling.invalid
  }`;
  const cityControlClasses = `${styling.control} ${
    formInputValidity.city ? "" : styling.invalid
  }`;

  //////////////////////////////////////////////////////////////
  return (
    <form className={styling.form} onSubmit={confirmHandler}>
      <div className={styling.scroll}>
        <div className={nameControlClasses}>
          <label htmlFor="name">Enter Your Name</label>
          <input type="text" id="name" ref={nameInputRef} />
          {!formInputValidity.name && <p>Please enter a valid name</p>}
        </div>

        <div className={cityControlClasses}>
          <label htmlFor="city">Enter your City</label>
          <input type="text" id="city" ref={cityInputRef} />
          {!formInputValidity.city && <p>Please enter a valid City Name</p>}
        </div>

        <div className={postalCodeControlClasses}>
          <label htmlFor="postal">Enter Your Postal Code</label>
          <input type="text" id="postal" ref={postalCodeInputRef} />
          {!formInputValidity.postalCode && (
            <p>Please enter a valid postal code</p>
          )}
        </div>

        <div className={addressControlClasses}>
          <label htmlFor="address">Enter Your Address</label>
          <input type="text" id="address" ref={addressInputRef} />
          {!formInputValidity.address && <p>Please enter a valid address</p>}
        </div>
      </div>

      <div className={styling.btnActions}>
        <button type="button" onClick={props.onClose} className={styling.cancel}>
          Cancel
        </button>
        {canCheckout && <button className={styling.submit}>Confirm</button>}
      </div>
    </form>
  );
};

export default Checkout;
