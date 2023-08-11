
import styles from './RestaurantCard.module.css';
import star from '../../assets/star.png';
import deliveryIcon from '../../assets/deliveryIcon.png';

const RestaurantCard: React.FC<{ name:string, image:string, rating:number, deliveryTime:number }> = (props) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardPhoto} src={props.image} alt="" />
      <h3 className={styles.cardName}>{props.name}</h3>
      <div className={styles.cardRating}>
        <p>south indian</p>
        <div className={styles.cardRatingStars}>
          <img src={star} alt="" />
          <p>props.rating</p>
        </div>
      </div>
      <div className={styles.cardRatingDeliveryTime}>
        <img src={deliveryIcon} alt="" />
        <p>{`${props.deliveryTime} Mins`}</p>
      </div>
    </div>
  );
}

export default RestaurantCard;
