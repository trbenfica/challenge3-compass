
import styles from './BasePage.module.css';
import Footer from '../../components/Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import logo from '../../assets/logo.png';

interface BasePageProps {
  content: 'register' | 'login';
}

const BasePage: React.FC<BasePageProps> = (props) => {

  let content: React.ReactNode;
  if(props.content === 'register') {
    content = <Register />
  }
  else{
    content = <Login />
  }

  return (
    <>
      <div className={styles.page}>
        <a href="/challenge3-compass/">
          <img className={styles.pageLogo} src={logo} alt="" />
        </a>
        <h3 className={styles.pageTitle}>
          {props.content === 'register' ? 'Register' : 'Login'}
        </h3>
        <hr className={styles.pageHr} />
        <div className={styles.pageInputs}>
          {content}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BasePage;
