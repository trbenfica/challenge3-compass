
import styles from './Footer.module.css';
import logoFooter from '../../assets/logoFooter.png';
import instagramLogo from '../../assets/instagram.png';
import facebookLogo from '../../assets/facebook.png';
import twitterLogo from '../../assets/twitter.png';

export default function Footer() {

  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.footerTop}>
          <img src={logoFooter} alt="" />
          <nav className={styles.footerTopNavs}>
            <li>About us</li>
            <li>Delivery</li>
            <li>Help & Support</li>
            <li>T&C</li>
          </nav>
          <p className={styles.footerTopContact}>Contact: +91 1234567899</p>
        </div>
        <div className={styles.footerBottom}>
          <img src={facebookLogo} alt="" />
          <img src={instagramLogo} alt="" />
          <img src={twitterLogo} alt="" />
        </div>
      </div>
    </footer>
  );
}