import React, { useState, useEffect } from 'react'
import { IRestaurant } from '../../Common/Models/Restaurant';
import axios from "axios"
import Restaurant from './Restaurant';
import { Row, Col, Image } from 'react-bootstrap';
const RestaurantList = () => {
    const [restaurants,setRestaurants] = useState<IRestaurant[]>([]);

    useEffect(() => {
     axios.get("http://localhost:5000/restaurant").then( response => {
         setRestaurants(response.data);
     })
    },[setRestaurants])
    return (
        <div>
            <Row md={2}>
            {restaurants && restaurants.map((restaurant) => (
                <Col key={restaurant.id}>
                <Restaurant  restaurant={restaurant} />
                </Col>
            ))}                          
            </Row>         
        </div>
    )
}

export default RestaurantList
