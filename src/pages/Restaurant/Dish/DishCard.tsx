
import { useContext } from 'react'
import LoginContext from '../../../services/LoginContext';
import styles from './DishCard.module.css';
import { DishCardInterface } from '../../../services/DishCardInterface';
import { CardItemInterface } from '../../../services/CartItemInterface';

const DishCard: React.FC<DishCardInterface> = (props) => {

  const {userCart, setUserCart, totalAmount, setTotalAmount} = useContext(LoginContext);

  const addItemToCart = () => {
    let newItem: CardItemInterface = {
      name: props.name,
      price: props.price,
      restaurant: 'Lean & Clean'
    }
    setUserCart((prev: Array<CardItemInterface>) =>  (
      [...prev, newItem]
    ));
    setTotalAmount((prev:number) => prev + 1);
  }

  // console.log(userCart);

  return (
    <div className={styles.container} data-testid='dish-card'>
      <div className={styles.containerInfos}>
        <h1>{props.name}</h1>
        <p className={styles.containerInfosPrice}>{`$ ${props.price}`}</p>
        <p className={styles.containerInfosDescription}>{props.description}</p>
      </div>
      <div className={styles.containerImg}>
        <img src={props.img} alt="" />
        <button onClick={addItemToCart}>Add +</button>
      </div>
    </div>    
  )
}

export default DishCard;
