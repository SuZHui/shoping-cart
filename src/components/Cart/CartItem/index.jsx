import { ButtonGroup, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

export default function CartItem() {
  return (
    <div className="cart-item">
      <div className="cart-item__left">
        <img src="/img/products/51498472915966370_1.jpg" alt="" />
      </div>
      <div className="cart-item__middle">
        <p className="title">Danger Knife Grey</p>
        <p className="desc">L | Branco com listras pretas</p>
        <span className="count">x 5</span>
      </div>
      <div className="cart-item__right">
        <div className="cart-item__right__del">
          <FontAwesomeIcon size="1x" icon={faTimes} />
        </div>
        <p className="cart-item__right__price">$ 9.00</p>
        <div>
          <ButtonGroup variant="contained" size="small" color="error">
            <Button disabled>
              <span>
                <FontAwesomeIcon size="xs" icon={faMinus} />
              </span>
            </Button>
            <Button>
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
