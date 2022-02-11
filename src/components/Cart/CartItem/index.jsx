import { ButtonGroup, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { removeProduct, updateProduct } from '@/services/actions';
import { formatPrice } from '@/utils';
import './style.scss';

export default function CartItem({ product }) {
  const handleIncrease = () => {
    product.qty++;
    updateProduct(product);
  };
  const handleDecrease = () => {
    product.qty--;
    updateProduct(product);
  };

  return (
    <div className="cart-item">
      <div className="cart-item__left">
        <img
          src={`${process.env.PUBLIC_URL}/img/products/${product.sku}_1.jpg`}
          alt={product.title}
        />
      </div>
      <div className="cart-item__middle">
        <p className="title">{product.title}</p>
        <p className="desc">{product.style}</p>
        <span className="count">x {product.qty}</span>
      </div>
      <div className="cart-item__right">
        <div
          className="cart-item__right__del"
          onClick={() => removeProduct(product)}
        >
          <FontAwesomeIcon size="1x" icon={faTimes} />
        </div>
        <p className="cart-item__right__price">
          {`${product.currencyFormat} ${formatPrice(product.price)}`}{' '}
        </p>
        <div>
          <ButtonGroup variant="contained" size="small" color="error">
            <Button onClick={handleDecrease} disabled={product.qty <= 1}>
              <span>
                <FontAwesomeIcon size="xs" icon={faMinus} />
              </span>
            </Button>
            <Button onClick={handleIncrease}>
              <span>
                <FontAwesomeIcon size="xs" icon={faPlus} />
              </span>
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}
