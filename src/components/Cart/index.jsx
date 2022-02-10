import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';
import CartItem from './CartItem';
import Empty from './Empty';
import './style.scss';

// const lockBody = () => {
//   if (!document.body.classList.contains('overflow-hidden')) {
//     document.body.classList.add('overflow-hidden')
//   }
// }

// const unlockBody = () => {
//   if (document.body.classList.contains('overflow-hidden')) {
//     document.body.classList.remove('overflow-hidden')
//   }
// }

export default function Cart() {
  const [isOpen, setOpen] = useState(false);

  const classes = ['cart'];
  if (isOpen) {
    classes.push('open');
  }
  return (
    <div className={classes.join(' ')}>
      {isOpen ? (
        <div className="cart__close-btn" onClick={() => setOpen(false)}>
          <FontAwesomeIcon icon={faArrowRight} size="lg" />
        </div>
      ) : (
        <div className="cart__open-btn" onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          <span className="quantity">11</span>
        </div>
      )}
      <div className="cart__content">
        <div className="cart__content__header">
          <div>
            <span>购物车</span>
            <span className="quantity">11</span>
          </div>
        </div>
        <div className="cart__content__container">
          <div>
            <Empty />
            {/* <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem /> */}
          </div>
        </div>
        <div className="cart__content__footer">
          <div className="cart__content__">
            <span>合计</span>
            <div>
              <p>
                <b>$ 219.15</b>
              </p>
              {/* <small>
                <span>OR UP TO 12 x $ 18.26</span>
              </small> */}
            </div>
          </div>
          <Button color="error" fullWidth size="large" variant="contained">
            结&nbsp;&nbsp;算
          </Button>
        </div>
      </div>
    </div>
  );
}
