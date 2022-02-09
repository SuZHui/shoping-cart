import React from 'react'
import { Card, CardMedia, CardActions, Button } from '@mui/material'
import useShadow from './useShadow'
import { formatPrice } from '@/utils'
import './style.scss'

export default function Product ({ onAdd, data }) {
  const { elevation, onMouseEnter, onMouseLeave } = useShadow()
  const formattedPrice = formatPrice(data.price)
  const [price1, price2 = '00'] = formattedPrice.split('.')
  return (
    <div className="product-item"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Card
        elevation={elevation}
      >
        {
          data.isFreeShipping && <div className="product-item__stopper">免运费</div>
        }
        <CardMedia
          component="img"
          src={`/img/products/${data.sku}_1.jpg`}
          alt={data.title}
          ></CardMedia>
        <p className="product-item__title">{ data.title }</p>
        <div className="product-item__price">
          <div className="val">
            <small>{ data.currencyFormat }</small>
            <b>{ price1 }</b>
            <span>{ `.${price2}` }</span>
          </div>
        </div>
        <CardActions>
          <Button
            onClick={() => onAdd(data)}
            fullWidth
            color="error"
            variant="outlined"
            sx={{color: '#fb0101', borderColor: '#fb0101'}}>加入购物车</Button>
        </CardActions>
      </Card>
    </div>
  )
}
