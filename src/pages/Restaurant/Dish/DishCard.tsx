
import styles from './DishCard.module.css';

interface DishCardProps {
  name: string;
  price: number;
  description: string;
  img: any;
}

const DishCard: React.FC<DishCardProps> = (props) => {

  return (
    <div className={styles.container} data-testid='dish-card'>
      <div className={styles.containerInfos}>
        <h1>{props.name}</h1>
        <p className={styles.containerInfosPrice}>{`$ ${props.price}`}</p>
        <p className={styles.containerInfosDescription}>{props.description}</p>
      </div>
      <div className={styles.containerImg}>
        <img src={props.img} alt="" />
        <button>Add +</button>
      </div>
    </div>    
  )
}

export default DishCard;
