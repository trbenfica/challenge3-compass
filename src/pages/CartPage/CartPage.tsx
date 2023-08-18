
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from './CartPage.module.css';
import Cart from '../../components/Cart/Cart';

const CartPage: React.FC = () => {

  const sessionToken = sessionStorage.getItem('userId');
  let title = '';
  if(sessionToken !== null) {
    const username = sessionStorage.getItem('username');
    title = `Carrinho de ${username}`
  }
  
  return (
    <>
      <Header />
      <div className={styles.page}>
        <h3 className={styles.pageTitle}>{title}</h3>
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
