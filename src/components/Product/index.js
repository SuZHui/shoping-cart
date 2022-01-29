import React from 'react'

export default function Product () {
  return (
    <div className="product-item">
      <div>产品销售角标（根据条件显示隐藏）</div>
      <div>产品图片占位</div>
      <p>产品标题</p>
      <div>
        <small>价格单位</small>
        <b>价格整数位</b>
        <span>价格小数位</span>
      </div>
      <div>加入购物车</div>
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
