
import styles from './Cart.module.css';
import CartItem from '../CartItem/CartItem';
import { useContext, useState } from 'react';
import LoginContext from '../../services/LoginContext';
import { DishCardInterface } from '../../services/DishCardInterface';

const Cart: React.FC = () => {

  const {userCart, setUserCart, totalAmount, setTotalAmount} = useContext(LoginContext);

  // const [totalAmount, setTotalAmount] = useState<number>(userCart.length);
  const sum = userCart.reduce((accumulator: number, currentValue: DishCardInterface) => accumulator + currentValue.price, 0);
  // console.log(sum);
  // console.log(totalAmount);
  const [totalPrice, setTotalPrice] = useState<number>(sum);

  return (
    <div className={styles.cart} data-testid='cart'>
      <div className={styles.cartTitles}>
        <h1>Cart</h1>
        <p>{totalAmount} Items</p>
      </div>

      {
        userCart.map((cartItem: any) => (
          <CartItem
            key={Math.floor(Math.random() * 500)}
            name={cartItem.name}
            price={cartItem.price}
            restaurant={'testing'}
          />
        ))
      }

      <div className={styles.cartSubtotal}>
        <div className={styles.cartSubtotalLeft}>
          <h1>Subtotal</h1>
          <p>Extra charges may apply</p>
        </div>
          <h1>$ {totalPrice}</h1>
      </div>
    </div>
  );
}

export default Cart;
