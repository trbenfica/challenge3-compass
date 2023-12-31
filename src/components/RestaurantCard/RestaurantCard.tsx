
import styles from './RestaurantCard.module.css';
import star from '../../assets/star.png';
import deliveryIcon from '../../assets/deliveryIcon.png';

interface RestaurantCardProps{
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  location: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = (props) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardPhoto} src={props.image} alt="" />
      <div className={styles.cardContainer}>
        <h3 className={styles.cardContainerName}>{props.name}</h3>
        <div className={styles.cardContainerRating}>
          <p>{props.location}</p>
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
