
import styles from './BasePage.module.css';
import Footer from '../../components/Footer/Footer';
import Register from '../Register/Register';
import Login from './../Login/Login';
import logo from '../../assets/logo.png';

export default function BasePage(props) {

  let content = '';
  if(props.content === 'register') {
    content = <Register />
  }
  else{
    content = <Login />
  }

  return (
    <>
      <div className={styles.page}>
        <img className={styles.pageLogo} src={logo} alt="" />
        <h3 className={styles.pageTitle}>Login</h3>
        <hr className={styles.pageHr} />
        <div className={styles.pageInputs}>
          {content}
        </div>
      </div>
      <Footer />
    </>
  );
}