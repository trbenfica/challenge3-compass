
import styles from './Home.module.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import axios from 'axios';
import { useEffect, useState } from 'react';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import dummyPhotos from '../../constants/dummyPhotos';

export default function Home() {
  const [data, setData] = useState(null);

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
        query: `query GetAllRestaurants {
          fitMes{
            count
            edges{
              node{
                objectId
                name
                rating
                deliveryTime
                image
              }
            }
          }
        }`
      }
    };
  
    axios
      .request(options)
      .then(function (response) {
        setData(response.data.data.fitMes);
      })
      .catch(function (error) {
        console.error(error);
      });  
  }, []);
  // console.log(data);
  
  return (
    <>
      <Header />
      <HeroBanner />
      <div className={styles.page}>
        <h1 className={styles.pageTitle}>Restaurants</h1>
        <div className={styles.pageRestaurants}>
          {data && data.edges.map(restaurant => (
            <a href={`/restaurant/${restaurant.node.objectId}`}>
              <RestaurantCard
                key={restaurant.node.objectId}
                name={restaurant.node.name} 
                image={dummyPhotos[restaurant.node.objectId]}
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