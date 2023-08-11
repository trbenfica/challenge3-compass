
import styles from './Home.module.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import axios from 'axios';
import { useEffect, useState } from 'react';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';

export default function Home() {
  const [data, setData] = useState();

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
  
  return (
    <>
      <Header />
      <HeroBanner />
      <div className={styles.page}>
        <h1>Restaurants</h1>
        <div className={styles.pageRestaurants}>
          {(data != undefined) &&
            data.edges.map(restaurant => {
              <RestaurantCard
                key={restaurant.node.objectId}
                name={restaurant.node.name} 
                image={restaurant.node.image}
                rating={restaurant.node.rating}
                deliveryTime={restaurant.node.deliveryTime} />
            })
          }
          {/* {(data != undefined) &&
            <RestaurantCard
              key={data.edges[3].node.objectId}
              name={data.edges[3].node.name} 
              image={data.edges[3].node.image}
              rating={data.edges[3].node.rating}
              deliveryTime={data.edges[3].node.deliveryTime} />
          } */}
          {/* {(data != undefined) &&
            <RestaurantCard
              key={data.data.fitMes.edges[0].node.objectId}
              name={data.data.fitMes.edges[0].node.name} 
              image={data.data.fitMes.edges[0].node.image}
              rating={data.data.fitMes.edges[0].node.rating}
              deliveryTime={data.data.fitMes.edges[0].node.deliveryTime} />
          } */}
          {/* {(data != undefined) && data.data.fitMes.edges.map(restaurant => {
            <RestaurantCard
              key={restaurant.node.objectId}
              name={restaurant.node.name} 
              image={restaurant.node.image}
              rating={restaurant.node.rating}
              deliveryTime={restaurant.node.deliveryTime} />
            })
          } */}
        </div>

        
      </div>
      <Footer />
    </>
  );
}