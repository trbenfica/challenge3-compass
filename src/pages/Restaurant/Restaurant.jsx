
import styles from './Restaurant.module.css'
import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';
import HeroComponent from './HeroRestaurant/HeroRestaurant';
import Header from '../../components/Header/Header';
import dummyPhotos from '../../constants/dummyPhotos';

export default function Restaurant() {

  // Busca a informação acerca da obra específica na API
  const { slug } = useParams();
  const [payload, setPayload] = useState({});

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
      <div className={styles.topContainer}>
        

      </div>
    </>
  )
}
