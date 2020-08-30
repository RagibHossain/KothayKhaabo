import React from "react";
import { IRestaurant } from "../../Common/Models/Restaurant";
import { Card } from "react-bootstrap";
import StarRatings from "react-star-ratings";
const RestaurantInfoCard: React.FC<{ restaurant: IRestaurant }> = ({
  restaurant,
}) => {
  return (
    <div className="cardListDiv">
      <div>
        <div 
          className="card detailsCard mb-2 ml-4 border-1 p-3"
          style={{ width: "25rem", height: "25rem" }}
        >
          <Card.Body>
            <Card.Title>Ratings and Reviews</Card.Title>
            <div className="review mt-4 mb-2">
              <h3 className="mr-2">{restaurant.rating}</h3>
              <StarRatings
                starRatedColor="#FEBD11"
                starDimension="20px"
                rating={restaurant.rating}
              />
              <p className="ml-2 mt-1"> 14 Reviews </p>
            </div>
          </Card.Body>
        </div>
      </div>
      <div >
        <div
          className=" card mb-2 ml-4 border-1 p-3 detailsCard"
          style={{ width: "25rem", height: "25rem" }}
        >
          <Card.Body>
            <Card.Title>Details</Card.Title>
            <div className="mt-4 mb-2">
              <div  className="mt-2 pb-2">
                <p>Price Range</p>
              </div>
              <div>
                <p>
                  BDT {restaurant.startingPrice} - BDT {restaurant.maxPrice}
                </p>
              </div>
            </div>
            <div className="mt-4 mb-2">
            <div  className="mt-2 pb-2">
                <p>Location</p>
              </div>
              <div>
                <p>
                 {restaurant.location}
                </p>
              </div>
            </div>
          </Card.Body>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfoCard;
