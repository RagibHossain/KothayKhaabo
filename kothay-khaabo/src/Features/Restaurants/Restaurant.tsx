import React from "react";
import { Card, Button } from "react-bootstrap";
import { IRestaurant } from "../../Common/Models/Restaurant";
import {observer} from "mobx-react-lite"
const Restaurant: React.FC<{ restaurant: IRestaurant }> = ({ restaurant }) => {
 
  const button = {
    backgroundColor: "#1B1B1B" 
  };
  return (
    <Card className="mb-2 border-0" style={{ width: "28rem" }}>
      <img
        className="cardImage"
        src={restaurant.image || "restaurant.jpg"}
        alt="Restaurant"
      />
      <Card.Body>
        <Card.Title>{restaurant.restaurantName}</Card.Title>
        <Card.Text>{restaurant.location}</Card.Text>
        <div>
          <Button
            className="button-font"
            variant="outline-light"
            style={button}
          >
            View
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default observer(Restaurant);
