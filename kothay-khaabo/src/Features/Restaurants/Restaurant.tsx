import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { IRestaurant } from "../../Common/Models/Restaurant";
import { observer } from "mobx-react-lite";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import { rootStoreContext } from "../../Common/Stores/rootStore";
const Restaurant: React.FC<{ restaurant: IRestaurant }> = ({ restaurant }) => {
  const rootStore = useContext(rootStoreContext);
  const {selectRestaurant} = rootStore.restaurantStore;
  const {color} = rootStore.userStore;
  return (
    <Card className="mb-2 ml-4 border-0" style={{ width: "25rem",backgroundColor : color ? color : "white" }}>
      <div className="restaurantCard">
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
        <Link onClick={() => selectRestaurant(restaurant)} to={`/restaurant/${restaurant.id}`}>
          <div className="mt-4">
            <button  className="submitButton " type="submit">
              View
            </button>
          </div>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default observer(Restaurant);
