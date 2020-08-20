import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { IRestaurant } from '../../Common/Models/Restaurant'

const Restaurant : React.FC<{restaurant : IRestaurant}> = ({restaurant}) => {

    
    return (
        <Card className="mb-2 border-0" style={{ width: '28rem' }}>
        <Card.Img className="cardImage" variant="top" src={restaurant.image || "restaurant.jpg"} />
        <Card.Body>
          <Card.Title>{restaurant.restaurantName}</Card.Title>
          <Card.Text>
           {restaurant.location}
          </Card.Text>
          <Button className="btn outline-light">View</Button>
        </Card.Body>
      </Card>
    )
}

export default Restaurant
