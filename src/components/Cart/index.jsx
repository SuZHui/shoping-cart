import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faArrowRight,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '@/services/actions';
import CartItem from './CartItem';
import Empty from './Empty';
import './style.scss';

export default function Cart() {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    Modal.confirm({
      title: '结算',
      content: `总计$${state.price.toFixed(2)}, 确认支付？`,
      okText: '继续支付',
      cancelText: '取消支付',
      onOk: () => {
        dispatch.cart.updateOpenState(false);
        dispatch.cart.clear();
        message.success('支付成功');
      },
    });
  };

  const classes = ['cart'];
  if (state.isOpen) {
    classes.push('open');
  }
  return (
    <div className={classes.join(' ')}>
      {state.isOpen ? (
        <div
          className="cart__close-btn"
          onClick={() => dispatch.cart.updateOpenState(false)}
        >
          <FontAwesomeIcon icon={faArrowRight} size="lg" />
        </div>
      ) : (
        <div
          className="cart__open-btn"
          onClick={() => dispatch.cart.updateOpenState(true)}
        >
          <FontAwesomeIcon
            icon={faShoppingCart}
            style={{ fontSize: 24 }}
            size="2x"
          />
          <span className="quantity">{state.total}</span>
        </div>
      )}
      {state.products.length > 0 && (
        <div className="cart__clear-btn" onClick={clearCart}>
          <FontAwesomeIcon icon={faTrash} size="1x" />
        </div>
      )}
      <div className="cart__content">
        <div className="cart__content__header">
          <div>
            <span>购物车</span>
            <span className="quantity">{state.total}</span>
          </div>
        </div>
        <div className="cart__content__container">
          <div>
            {state.products.length <= 0 && <Empty />}
            {state.products.map((p) => (
              <CartItem key={p.id} product={p} />
            ))}
          </div>
        </div>
        <div className="cart__content__footer">
          <div>
            <span>合计</span>
            <div>
              <p>
                <b>$ {state.price.toFixed(2)}</b>
              </p>
            </div>
          </div>
          <Button
            type="primary"
            danger
            block
            size="large"
            disabled={state.price <= 0}
            onClick={handleCheckout}
          >
            结&nbsp;&nbsp;算
          </Button>
        </div>
      </div>
    </div>
  );
}
