
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
  console.log(data);

  let cards = [];
  if(data !== null) {
    for(let i = 0; i < data.edges.length; i++) {
      let restaurant = data.edges[i];
      cards.push(
        <RestaurantCard
          key={restaurant.node.objectId}
          name={restaurant.node.name} 
          image={dummyPhotos[i]}
          rating={restaurant.node.rating}
          deliveryTime={restaurant.node.deliveryTime} />
      )
    }
  }
  
  return (
    <>
      <Header />
      <HeroBanner />
      <div className={styles.page}>
        <h1 className={styles.pageTitle}>Restaurants</h1>
        <div className={styles.pageRestaurants}>
          {
            data && cards
          }
          {/* {data && data.edges.map(restaurant => (
            <RestaurantCard
              key={restaurant.node.objectId}
              name={restaurant.node.name} 
              image={restaurant.node.image}
              rating={restaurant.node.rating}
              deliveryTime={restaurant.node.deliveryTime} />
          ))} */}
        </div>        
      </div>
      <Footer />
    </>
  );
}