import React from "react";
import { Card } from "react-bootstrap";
import { IRestaurant } from "../../Common/Models/Restaurant";
import { observer } from "mobx-react-lite";
import StarRatings from "react-star-ratings";
const Restaurant: React.FC<{ restaurant: IRestaurant }> = ({ restaurant }) => {
  return (
      <Card className="mb-2 ml-5 border-0" style={{ width: "28rem" }}>
        <div  className="restaurantCard">
          <img
            className="cardImage"
            src={restaurant.image || "restaurant.jpg"}
            alt="Restaurant"
          />
        </div>

        <Card.Body>
          <Card.Title>{restaurant.restaurantName}</Card.Title>
          <Card.Text>{restaurant.location}</Card.Text>
          <div className="mt-2 mb-2">
            <StarRatings
              starRatedColor="#FEBD11"
              starDimension="30px"
              rating={restaurant.rating}
            />
          </div>
          <div>
            <button
              className="submitButton mt-2"
              type="submit"
            >
              View
            </button>
          </div>
        </Card.Body>
      </Card>
  );
};

export default observer(Restaurant);
