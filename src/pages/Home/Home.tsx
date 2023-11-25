
import styles from './Home.module.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import dummyPhotos from '../../constants/dummyPhotos';
import useGraphQlFetch from '../../hooks/useGraphQlFetch';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import { useState } from 'react';
import { queryAllRestaurants } from '../../services/queriesService';

interface Restaurant {
  node: {
    objectId: string;
    name: string;
    rating: number;
    deliveryTime: string;
    location: string;
  };
}

const Home: React.FC = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  function closeModal() {
    setIsModalOpen(false);
  }

  const { data, loading, error } = useGraphQlFetch(queryAllRestaurants());

  return (
    <>
      <Header />
      <HeroBanner />
      {!loading && data === null && <ModalWindow isOpen={isModalOpen} onClose={closeModal}>
          <img src='https://cdn-icons-png.flaticon.com/128/2797/2797387.png' alt="" />
          <h1>Não foi possível conectar ao servidor!</h1>
        </ModalWindow>
      }
      <div className={styles.page}>
        <h1 className={styles.pageTitle}>Restaurants</h1>
        <div className={styles.pageRestaurants}>
          {loading && <div className={styles.pageLoader} />}
          {data && data.data.fitMes.edges.map((restaurant: Restaurant) => (
            <a key={restaurant.node.objectId} href={`/restaurant/${restaurant.node.objectId}`}>
              <RestaurantCard
                name={restaurant.node.name} 
                image={dummyPhotos[restaurant.node.objectId]}
                location={restaurant.node.location}
                rating={restaurant.node.rating}
                deliveryTime={restaurant.node.deliveryTime}
              />
            </a>
          ))}
        </div>        
      </div>
      <Footer />
    </>
  );
}

export default Home;
