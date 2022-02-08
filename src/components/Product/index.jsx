import React from 'react'
import { Card, CardMedia, CardActions, Button } from '@mui/material'
import useShadow from './useShadow'
import './style.scss'

export default function Product () {
  const { elevation, onMouseEnter, onMouseLeave } = useShadow()


  return (
    <div className="product-item"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Card
        elevation={elevation}
      >
        <div className="product-item__stopper">免运费</div>
        <CardMedia
          component="img"
          src="/img/products/51498472915966370_1.jpg"
          alt="1"
          ></CardMedia>
        <p className="product-item__title">Cat Tee Black T-Shirt</p>
        <div className="product-item__price">
          <div className="val">
            <small>$</small>
            <b>29</b>
            <span>.45</span>
          </div>

          {/* 分期 */}
          <div className="installment">
            <span>or 5 x</span>
            <b>$ 5.89</b>
          </div>
        </div>
        <CardActions>
          <Button
            fullWidth
            color="error"
            variant="outlined"
            sx={{color: '#fb0101', borderColor: '#fb0101'}}>加入购物车</Button>
        </CardActions>
      </Card>
    </div>
  )
}

// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// import Thumb from '../../../Thumb';
// import { formatPrice } from '../../../../services/util';
// import { addProduct } from '../../../../services/cart/actions';

// const Product = ({ product, addProduct }) => {
//   product.quantity = 1;

//   let formattedPrice = formatPrice(product.price, product.currencyId);

//   let productInstallment;

//   if (!!product.installments) {
//     const installmentPrice = product.price / product.installments;

//     productInstallment = (
//       <div className="installment">
//         <span>or {product.installments} x</span>
//         <b>
//           {product.currencyFormat}
//           {formatPrice(installmentPrice, product.currencyId)}
//         </b>
//       </div>
//     );
//   }

//   return (
//     <div
//       className="shelf-item"
//       onClick={() => addProduct(product)}
//       data-sku={product.sku}
//     >
//       {product.isFreeShipping && (
//         <div className="shelf-stopper">Free shipping</div>
//       )}
//       <Thumb
//         classes="shelf-item__thumb"
//         src={require(`../../../../static/products/${product.sku}_1.jpg`)}
//         alt={product.title}
//       />
//       <p className="shelf-item__title">{product.title}</p>
//       <div className="shelf-item__price">
//         <div className="val">
//           <small>{product.currencyFormat}</small>
//           <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
//           <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
//         </div>
//         {productInstallment}
//       </div>
//       <div className="shelf-item__buy-btn">Add to cart</div>
//     </div>
//   );
// };

// Product.propTypes = {
//   product: PropTypes.object.isRequired,
//   addProduct: PropTypes.func.isRequired
// };

// export default connect(
//   null,
//   { addProduct }
// )(Product);
