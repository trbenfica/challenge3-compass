
import { useContext, useState } from 'react';
import styles from './CartItem.module.css';
import LoginContext from '../../services/LoginContext';
import { CardItemInterface } from '../../services/CartItemInterface';

const CartItem: React.FC<CardItemInterface> = (props) => {
  const [itemAmount, setItemAmount] = useState<number>(1);
  const {userCart, setUserCart, totalPrice, setTotalPrice} = useContext(LoginContext);

  const decreaseHandler = () => {
    if ((totalPrice - props.price > 0) && itemAmount > 0) {
      setItemAmount(prev => prev - 1);
      setTotalPrice((prevTotalPrice:number) => parseFloat((prevTotalPrice - props.price).toFixed(2)));
    }
  }

  const increaseHandler = () => {
    // setItemAmount(prev => prev + 1);
    setItemAmount(itemAmount + 1);
    setTotalPrice((prevTotalPrice:number) => parseFloat((prevTotalPrice + props.price).toFixed(2)));
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
        <p className={styles.cartItemRightQnt}>{itemAmount}</p>
        <button onClick={increaseHandler} className={styles.cartItemRightButton}>+</button>
      </div>
    </div>
  );
}

export default CartItem;
