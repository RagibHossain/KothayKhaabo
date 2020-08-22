import React, { useContext } from 'react'
import Restaurant from './Restaurant';
import { Row, Col } from 'react-bootstrap';
import { restaurantStoreContext } from '../../Common/Stores/restauantStore';
import { observer } from 'mobx-react-lite';
import Header from '../Home/Header';
const RestaurantList = () => {
    const {restaurants} = useContext(restaurantStoreContext);
    const props = {
        content : "Restaurants",
        description : "Top places to visit at the moment"
    }
    return (
        <div>  
            <Header content={props.content} description={props.description}/>     
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

export default observer(RestaurantList);
