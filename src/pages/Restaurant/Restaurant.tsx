
import styles from './Restaurant.module.css'
import { useParams } from "react-router-dom";
import {useState} from 'react';
import HeroComponent from './HeroRestaurant/HeroRestaurant';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import dummyPhotos from '../../constants/dummyPhotos';
import SearchBarRestaurant from './SearchBarRestaurant/SearchBarRestaurant';
import DishCard from './Dish/DishCard';
import useGraphQlFetch from '../../hooks/useGraphQlFetch';
import { queryRestaurantById } from '../../services/queriesService';

const Restaurant: React.FC = () => {

  const { slug } = useParams<{ slug: any }>();
  const [itemQnt, setItemQnt] = useState<number>(0);
  
  const { data, loading, error } = useGraphQlFetch(queryRestaurantById(slug));

  const decreaseHandler = () => {
    if(itemQnt > 0)
      setItemQnt(prev => prev - 1);
  }

  const increaseHandler = () => {
    setItemQnt(prev => prev + 1);
  }

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

        <div className={styles.cart} data-testid='cart'>
          <div className={styles.cartTitles}>
            <h1>Cart</h1>
            <p>2 Items</p>
          </div>

          <div className={styles.cartItem}>
            <div className={styles.cartItemLeft}>
              <p className={styles.cartItemLeftRestaurant}>from <span>restaurant</span></p>
              <p className={styles.cartItemLeftName}>food-name-here</p>
              <p className={styles.cartItemLeftPrice}>$ price-here</p>
            </div>
            <div className={styles.cartItemRight}>
              <button onClick={decreaseHandler} className={styles.cartItemRightButton}>-</button>
              <p className={styles.cartItemRightQnt}>{itemQnt}</p>
              <button onClick={increaseHandler} className={styles.cartItemRightButton}>+</button>
            </div>
          </div>

          <div className={styles.cartItem}>
            <div className={styles.cartItemLeft}>
              <p className={styles.cartItemLeftRestaurant}>from <span>restaurant</span></p>
              <p className={styles.cartItemLeftName}>food-name-here</p>
              <p className={styles.cartItemLeftPrice}>$ price-here</p>
            </div>
            <div className={styles.cartItemRight}>
              <button onClick={decreaseHandler} className={styles.cartItemRightButton}>-</button>
              <p className={styles.cartItemRightQnt}>{itemQnt}</p>
              <button onClick={increaseHandler} className={styles.cartItemRightButton}>+</button>
            </div>
          </div>

          <div className={styles.cartSubtotal}>
            <div className={styles.cartSubtotalLeft}>
              <h1>Subtotal</h1>
              <p>Extra charges may apply</p>
            </div>
              <h1>$ 23</h1>
          </div>
        </div>
                

      </div>
      <Footer />
    </>
  )
}

export default Restaurant;
