
import styles from './Restaurant.module.css'
import { useParams } from "react-router-dom";
import HeroComponent from './HeroRestaurant/HeroRestaurant';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import dummyPhotos from '../../constants/dummyPhotos';
import SearchBarRestaurant from './SearchBarRestaurant/SearchBarRestaurant';
import DishCard from './Dish/DishCard';
import useGraphQlFetch from '../../hooks/useGraphQlFetch';
import { queryRestaurantById } from '../../services/queriesService';
import Cart from '../../components/Cart/Cart';

const Restaurant: React.FC = () => {

  const { slug } = useParams<{ slug: any }>();
  const { data, loading, error } = useGraphQlFetch(queryRestaurantById(slug));

  return (
    <>
      <Header />
      {data && <HeroComponent
        name={data.data.fitMe.name} 
        location={data.data.fitMe.location}
        image={dummyPhotos[slug]} 
        rating={data.data.fitMe.rating} 
        deliveryTime={data.data.fitMe.deliveryTime}
      />}
      <SearchBarRestaurant />
      <div className={styles.content}>
        <nav className={styles.contentNavs}>
          <li>Recommended</li>
          <li>Breakfast Box</li>
          <li>Lunch Box</li>
          <li>Combo Box</li>
          <li>Biriyani Box</li>
        </nav>
        <select className={styles.contentNavsSelect}>
          <option>Recommended</option>
          <option>Breakfast Box</option>
          <option>Lunch Box</option>
          <option>Combo Box</option>
          <option>Biriyani Box</option>
        </select>

        <div className={styles.contentMain}>
          {data && data.data.fitMe.topDishes.map((dish: any) => (
            <DishCard
              key={dish.name}
              name={dish.name} 
              price={dish.price} 
              description={dish.description} 
              img={dummyPhotos[slug]}
            />
          ))}
        </div>

        <Cart />

      </div>
      <Footer />
    </>
  )
}

export default Restaurant;
