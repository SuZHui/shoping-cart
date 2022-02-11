import React from 'react';
import { Card, Button } from 'antd';
import { formatPrice } from '@/utils';
import styles from './style.module.scss';

export default function Product({ onAdd, data }) {
  const formattedPrice = formatPrice(data.price);
  const [price1, price2 = '00'] = formattedPrice.split('.');
  return (
    <div className={styles['product-item']}>
      <Card
        hoverable
        cover={
          <img
            style={{ border: '1px solid #f0f0f0' }}
            alt={data.title}
            src={`${process.env.PUBLIC_URL}/img/products/${data.sku}_1.jpg`}
          />
        }
      >
        {data.isFreeShipping && (
          <div className={styles['product-item__stopper']}>免运费</div>
        )}
        <p className={styles['product-item__title']}>{data.title}</p>
        <div className={styles['product-item__price']}>
          <div className={styles['val']}>
            <small>{data.currencyFormat}</small>
            <b>{price1}</b>
            <span>{`.${price2}`}</span>
          </div>
        </div>
        <Button onClick={() => onAdd(data)} danger type="primary" block>
          加入购物车
        </Button>
      </Card>
    </div>
  );
}

Product.defaultProps = {
  onAdd() {},
};
