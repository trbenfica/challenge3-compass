
import styles from './Restaurant.module.css'
import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';
import HeroComponent from './HeroRestaurant/HeroRestaurant';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import dummyPhotos from '../../constants/dummyPhotos';
import SearchBarRestaurant from './SearchBarRestaurant/SearchBarRestaurant';
import DishCard from './Dish/DishCard';

export default function Restaurant() {

  const { slug } = useParams();
  const [payload, setPayload] = useState({});

  const [itemQnt, setItemQnt] = useState(0);
  // type restaurantData = {
  //   name: string,
  //   location: string,
  //   rating: number,
  //   deliveryTime: number
  // }

  useEffect(() => {
    const options = {
      method: 'POST',
      url: 'https://parseapi.back4app.com/graphql',
      headers: {
        "X-Parse-Application-Id": "lrAPveloMl57TTby5U0S4rFPBrANkAhLUll8jFOh",
        "X-Parse-REST-API-Key": '8aqUBWOjOplfA6lstntyYsYVkt3RzpVtb8qU5x08',
        "Content-Type": "application/json"
      },
      data: {
        query: `query GetRestaurantById {
          fitMe(id: "keB6js62Kx") {
              name
              image
              location
              name
              rating
              deliveryTime
              topDishes{
                  ... AllDishes
              }
          }
      }
      
      fragment AllDishes on Dish {
          name
          description
          image
          price
      }`
      }
    };
  
    axios
      .request(options)
      .then(function (response) {
        setPayload(response.data.data.fitMe);
      })
      .catch(function (error) {
        console.error(error);
      });  
  }, []);
  console.log(payload);

  const decreaseHandler = () => {
    if(itemQnt > 0)
      setItemQnt(prev => prev - 1);
  }

  const increaseHandler = () => {
    setItemQnt(prev => prev + 1);
  }

  // const cartDummy = {
  //   items = []
  // }

  return (
    <>
      <Header />
      <HeroComponent
        name={payload.name} 
        location={payload.location}
        image={dummyPhotos[slug]} 
        rating={payload.rating} 
        deliveryTime={payload.deliveryTime}
      />
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
          {payload.topDishes && payload.topDishes.map(dish => (
            <DishCard
              key={dish.name}
              name={dish.name} 
              price={dish.price} 
              description={dish.description} 
              img={dummyPhotos[slug]}
            />
          ))}
        </div>

        <div className={styles.cart}>
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
