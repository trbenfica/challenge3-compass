
import styles from './HeroRestaurant.module.css'
import percentage from '../../../assets/percentage.png'
import star from '../../../assets/star.png'

const HeroComponent: React.FC<{ name:string, location: string, image:string, rating:number, deliveryTime:number }> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroImg}>
          <img src={props.image} alt="" />
        </div>


        <div className={styles.heroTitle}>
          <h1>{props.name}</h1>
          <p>{props.location}</p>
          <div className={styles.heroTitleSubinfos}>
            <div className={styles.heroTitleSubinfosInfo}>
              <div className={styles.heroTitleSubinfosInfoRating}>  
                <img src={star} alt="" />
                <p>{props.rating}</p>
              </div>
              <p>100+ ratings</p>
            </div>

            <div className={styles.heroTitleSubinfosBar} />

            <div className={styles.heroTitleSubinfosInfo}>
              <p>{props.deliveryTime}</p>
              <p>Delivery Time</p>
            </div>

            <div className={styles.heroTitleSubinfosBar} />

            <div className={styles.heroTitleSubinfosInfo}>
              <p>$ 200</p>
              <p>Cost for two</p>
            </div>
          </div>
        </div>

        {/* <div className={styles.heroTitle}>
          <h1>{props.name}</h1>
          <p>{props.location}</p>
          <div className={styles.heroTitleSubinfos}>
            <div className={styles.heroTitleSubinfosInfo}>
              <div className={styles.heroTitleSubinfosInfoRating}>  
                <img src={star} alt="" />
                <p>{props.rating}</p>
              </div>
              <p>100+ ratings</p>
            </div>

            <div className={styles.heroTitleSubinfosBar} />

            <div className={styles.heroTitleSubinfosInfo}>
              <p>{props.deliveryTime}</p>
              <p>Delivery Time</p>
            </div>

            <div className={styles.heroTitleSubinfosBar} />

            <div className={styles.heroTitleSubinfosInfo}>
              <p>$ 200</p>
              <p>Cost for two</p>
            </div>
          </div>
        </div> */}


        <div className={styles.heroOffers}>
          <h3 className={styles.heroOffersTitle}>Offers</h3>
          <div className={styles.heroOffersContainer}>
            <div className={styles.heroOffersContainerItem}>
              <img src={percentage} alt="" />
              <p>50% off up to $100 | Use code TRYNEW</p>
            </div>
            <div className={styles.heroOffersContainerItem}>
              <img src={percentage} alt="" />
              <p>20% off | Use code PARTY</p>
            </div>
          </div>
        </div>

      </div>

    </div>

  );

}

export default HeroComponent;
