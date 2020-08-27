import React, { useContext } from 'react'
import Restaurant from './Restaurant';
import { Row, Col } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import Header from '../Home/Header';
import { rootStoreContext } from '../../Common/Stores/rootStore';
const RestaurantList = () => {
    const rootStore  = useContext(rootStoreContext);
    const {restaurants} = rootStore.restaurantStore;
    const props = {
        content : "Restaurants",
        description : "Top places to visit at the moment"
    }
    return (
        <div>  
            <Header content={props.content} description=""/>     
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
