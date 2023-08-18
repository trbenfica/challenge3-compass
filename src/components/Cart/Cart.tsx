
import { useState } from 'react';
import styles from './Cart.module.css';

const Cart: React.FC = () => {
  const [itemQnt, setItemQnt] = useState<number>(0);
  
  const decreaseHandler = () => {
    if(itemQnt > 0)
      setItemQnt(prev => prev - 1);
  }

  const increaseHandler = () => {
    setItemQnt(prev => prev + 1);
  }

  return (
    <div className={styles.cart} data-testid='cart'>
      <div className={styles.cartTitles}>
        <h1>Cart</h1>
        <p>2 Items</p>
      </div>

      <div className={styles.cartItem}>
        <div className={styles.cartItemLeft}>
          <p className={styles.cartItemLeftRestaurant}>from <span>restaurant</span></p>
          <p className={styles.cartItemLeftName}>food-name-here</p>
          <p className={styles.cartItemLeftPrice}>$ price-here</p>
        </div>
        <div className={styles.cartItemRight}>
          <button onClick={decreaseHandler} className={styles.cartItemRightButton}>-</button>
          <p className={styles.cartItemRightQnt}>{itemQnt}</p>
          <button onClick={increaseHandler} className={styles.cartItemRightButton}>+</button>
        </div>
      </div>

      <div className={styles.cartItem}>
        <div className={styles.cartItemLeft}>
          <p className={styles.cartItemLeftRestaurant}>from <span>restaurant</span></p>
          <p className={styles.cartItemLeftName}>food-name-here</p>
          <p className={styles.cartItemLeftPrice}>$ price-here</p>
        </div>
        <div className={styles.cartItemRight}>
          <button onClick={decreaseHandler} className={styles.cartItemRightButton}>-</button>
          <p className={styles.cartItemRightQnt}>{itemQnt}</p>
          <button onClick={increaseHandler} className={styles.cartItemRightButton}>+</button>
        </div>
      </div>

      <div className={styles.cartSubtotal}>
        <div className={styles.cartSubtotalLeft}>
          <h1>Subtotal</h1>
          <p>Extra charges may apply</p>
        </div>
          <h1>$ 23</h1>
      </div>
    </div>
  );
}

export default Cart;
