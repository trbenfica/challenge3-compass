
import styles from './Cart.module.css';
import CartItem from '../CartItem/CartItem';
import { useContext, useState } from 'react';
import LoginContext from '../../services/LoginContext';
import { DishCardInterface } from '../../services/DishCardInterface';
import { CardItemInterface } from '../../services/CartItemInterface';

const Cart: React.FC = () => {

  const {userCart, setUserCart, totalPrice, setTotalPrice} = useContext(LoginContext);

  // const [totalAmount, setTotalAmount] = useState<number>(userCart.length);
  // const sum = userCart.reduce((accumulator: number, currentValue: DishCardInterface) => accumulator + currentValue.price, 0);
  // console.log(sum);
  // console.log(totalAmount);
  // const [totalPrice, setTotalPrice] = useState<number>(sum);
  const sessionToken = sessionStorage.getItem('userCart');
  let currentCart: Array<CardItemInterface>;
  let numItems = 0;
  if(sessionToken !== null) {
    currentCart = JSON.parse(sessionToken);
    let numItemsStr = sessionStorage.getItem('numItemsCart');
    if(numItemsStr !== null) {
      numItems = parseFloat(numItemsStr);
    }
    
    // setCart(JSON.parse(sessionToken));
  }
  else {
    currentCart = userCart;
  }

  const trashCanHandler = () => {
    sessionStorage.removeItem('userCart');
    sessionStorage.removeItem('totalPriceCart');
    sessionStorage.removeItem('numItemsCart');
  }

  return (
    <div className={styles.cart} data-testid='cart'>
      <div className={styles.cartTitles}>
        <h1>Cart</h1>
        <div className={styles.cartTitlesRight}>
          <button onClick={trashCanHandler}>
            <img src="https://cdn-icons-png.flaticon.com/128/3096/3096673.png" alt="" />
          </button>
          <p>{numItems} Items</p>
        </div>
      </div>

      {
        currentCart.map((cartItem: any) => (
          <CartItem
            key={Math.floor(Math.random() * 500)}
            name={cartItem.name}
            price={cartItem.price}
            restaurant={cartItem.restaurant}
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
      <button className={styles.cartCheckout}><h1>Checkout</h1></button>
    </div>
    
  );
}

export default Cart;
