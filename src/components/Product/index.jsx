import React from 'react';
import { CardMedia, CardActions, Button } from '@mui/material';
import { Card } from 'antd';
import useShadow from './useShadow';
import { formatPrice } from '@/utils';
import './style.scss';

export default function Product({ onAdd, data }) {
  const formattedPrice = formatPrice(data.price);
  const [price1, price2 = '00'] = formattedPrice.split('.');
  return (
    <div className="product-item">
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
          <div className="product-item__stopper">免运费</div>
        )}
        <p className="product-item__title">{data.title}</p>
        <div className="product-item__price">
          <div className="val">
            <small>{data.currencyFormat}</small>
            <b>{price1}</b>
            <span>{`.${price2}`}</span>
          </div>
        </div>
        <CardActions>
          <Button
            onClick={() => onAdd(data)}
            fullWidth
            color="error"
            variant="outlined"
            sx={{ color: '#fb0101', borderColor: '#fb0101' }}
          >
            加入购物车
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

Product.defaultProps = {
  onAdd() {},
};
