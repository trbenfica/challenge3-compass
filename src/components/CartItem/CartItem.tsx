
import { useContext, useState } from 'react';
import styles from './CartItem.module.css';
import LoginContext from '../../services/LoginContext';
import { CardItemInterface } from '../../services/CartItemInterface';

const CartItem: React.FC<CardItemInterface> = (props) => {
  const [itemQnt, setItemQnt] = useState<number>(1);
  const {userCart, setUserCart, totalAmount, setTotalAmount} = useContext(LoginContext);

  const decreaseHandler = () => {
    if(itemQnt > 0) {
      setItemQnt(prev => prev - 1);
      // props.setTotalAmountCb((prev:number) => prev - 1);
      setTotalAmount((prev: number) => prev - 1);
    }
  }

  const increaseHandler = () => {
    // setTotalAmount((prev:number) => prev + 1);
    setItemQnt(prev => prev + 1);
    setTotalAmount((prev: number) => prev + 1);
  }

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemLeft}>
        <p className={styles.cartItemLeftRestaurant}>from <span>{props.restaurant}</span></p>
        <p className={styles.cartItemLeftName}>{props.name}</p>
        <p className={styles.cartItemLeftPrice}>$ {props.price}</p>
      </div>
      <div className={styles.cartItemRight}>
        <button onClick={decreaseHandler} className={styles.cartItemRightButton}>-</button>
        <p className={styles.cartItemRightQnt}>{itemQnt}</p>
        <button onClick={increaseHandler} className={styles.cartItemRightButton}>+</button>
      </div>
    </div>
  );
}

export default CartItem;
