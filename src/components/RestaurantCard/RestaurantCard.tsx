
import styles from './RestaurantCard.module.css';
import star from '../../assets/star.png';
import deliveryIcon from '../../assets/deliveryIcon.png';

const RestaurantCard: React.FC<{ name:string, image:string, rating:number, deliveryTime:number }> = (props) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardPhoto} src={props.image} alt="" />
      <div className={styles.cardContainer}>
        <h3 className={styles.cardContainerName}>{props.name}</h3>
        <div className={styles.cardContainerRating}>
          <p>south indian</p>
          <div className={styles.cardContainerRatingStars}>
            <img src={star} alt="" />
            <p>{props.rating}</p>
          </div>
        </div>
        <div className={styles.cardContainerDeliveryTime}>
          <img src={deliveryIcon} alt="" />
          <p>{props.deliveryTime}</p>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
