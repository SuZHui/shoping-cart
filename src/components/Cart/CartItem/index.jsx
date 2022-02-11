import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { removeProduct, updateProduct } from '@/services/actions';
import { formatPrice } from '@/utils';
import styles from './style.module.scss';
console.log(styles);

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
    <div className={styles['cart-item']}>
      <div className={styles['cart-item__left']}>
        <img
          src={`${process.env.PUBLIC_URL}/img/products/${product.sku}_1.jpg`}
          alt={product.title}
        />
      </div>
      <div className={styles['cart-item__middle']}>
        <p className={styles['title']}>{product.title}</p>
        <p className={styles['desc']}>{product.style}</p>
        <span className={styles['count']}>x {product.qty}</span>
      </div>
      <div className={styles['cart-item__right']}>
        <div
          className={styles['cart-item__right__del']}
          onClick={() => removeProduct(product)}
        >
          <FontAwesomeIcon size="1x" icon={faTimes} />
        </div>
        <p className={styles['cart-item__right__price']}>
          {`${product.currencyFormat} ${formatPrice(product.price)}`}{' '}
        </p>
        <div>
          <Button
            danger
            size="small"
            type="primary"
            icon={<FontAwesomeIcon size="xs" icon={faMinus} />}
            disabled={product.qty <= 1}
            onClick={handleDecrease}
          ></Button>
          <Button
            danger
            size="small"
            type="primary"
            icon={<FontAwesomeIcon size="xs" icon={faPlus} />}
            onClick={handleIncrease}
          ></Button>
        </div>
      </div>
    </div>
  );
}
