import React from "react";
import SubHeader from "../Home/SubHeader";
import { IRestaurant } from "../../Common/Models/Restaurant";
import RestaurantReview from "./RestaurantReview";
import NoReviews from "./NoReviews";
interface IProps {
  restaurant: IRestaurant;
}
const RestaurantReviewList: React.FC<IProps> = ({ restaurant }) => {
  let i = 0;
  return (
    <div className="reviewList mt-5 ">
      <div className="d-flex p-3">
        <SubHeader
          image="/reviewIcon.png"
          title={`Ratings and Reviews (${restaurant.totalReviews})`}
        />
        <div className="ml-auto mt-3 mr-5">
          <button className="submitButton" style={{width:"100%",height:"50%"}} type="submit">
            Write a review
          </button>
        </div>
      </div>
      {restaurant.totalReviews === 0 ? (
        <NoReviews />
      ) : (
        restaurant.restaurantReviews.map((review) => (
          <div key={i++}>
            <RestaurantReview review={review} />
          </div>
        ))
      )}
    </div>
  );
};

export default RestaurantReviewList;
