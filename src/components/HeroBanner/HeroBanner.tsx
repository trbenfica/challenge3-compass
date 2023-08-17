
import styles from './HeroBanner.module.css'
import ornament1 from '../../assets/ornament_1.png'
import ornament2 from '../../assets/ornament_2.png'
import illustration1 from '../../assets/restaurantPhoto1.png'
import illustration2 from '../../assets/restaurantPhoto2.png'
import illustration3 from '../../assets/restaurantPhoto4.jpeg'
import banana from '../../assets/banana.png'
import apple from '../../assets/apple.png'

const HeroBanner: React.FC = () => {

  return (
    <div className={styles.hero} data-testid='hero-banner'>
      <div className={styles.heroBG}>
        <img className={styles.heroBGImg1} src={ornament1} alt="" />
        <img className={styles.heroBGImg2} src={ornament2} alt="" />
      </div>
      <div className={styles.heroMain}>
        <div className={styles.heroMainTitle}>
          <h1>
            Premium <span> quality </span> <br />
            Food for your <img src={banana} alt="" /> <span> healthy </span>
            <img src={apple} alt="" /> & <span> Daily Life</span>
          </h1>
          <p className={styles.heroMainSubtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className={styles.heroMainPhotos}>
          <img src={illustration1} alt="" />
          <img src={illustration2} alt="" />
          <img src={illustration3} style={{borderRadius: '20px'}} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
