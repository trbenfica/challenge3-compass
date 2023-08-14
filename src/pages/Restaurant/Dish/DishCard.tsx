
import styles from './DishCard.module.css';

const DishCard: React.FC<{ name:string, price:number, description:string, img:any }> = (props) => {
  return (
    <div className={styles.container}>
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
