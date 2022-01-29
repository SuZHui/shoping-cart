import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

export default function Cart() {
  const [isOpen, setOpen] = useState(false);

  const classes = ["cart"];
  if (isOpen) {
    classes.push("open");
  }
  return (
    <div className={classes.join(" ")}>
      {isOpen ? (
        <div className="cart__close-btn" onClick={() => setOpen(false)}>
          X
        </div>
      ) : (
        <div className="cart__open-btn" onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          <span className="quantity">11</span>
        </div>
      )}
      <div className="cart__content">购物车</div>
    </div>
  );
}
