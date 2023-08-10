
import styles from './Home.module.css';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function Home() {

  return (
    <>
      <Header />
      <div className={styles.page}>
        <h3>Content</h3>        

      </div>
      <Footer />
    </>
  );
}