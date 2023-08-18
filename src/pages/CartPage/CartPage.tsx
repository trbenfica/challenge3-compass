
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from './CartPage.module.css';
import Cart from '../../components/Cart/Cart';

const CartPage: React.FC = () => {
  
  return (
    <>
      <Header />
      <div className={styles.page}>
        <h3 className={styles.pageTitle}>Cart</h3>
        <hr className={styles.pageHr} />
        <div className={styles.pageInputs}>
          <Cart />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CartPage;
