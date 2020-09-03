import React from "react";
import { IReview } from "../../Common/Models/Restaurant";
import CircularImage from "../CustomImages/CircularImage";
import StarRatings from "react-star-ratings";
const RestaurantReview: React.FC<{ review: IReview }> = ({ review }) => {
  
  return (
    <div
      className="reviewDiv"
      style={{ display: "flex", marginLeft: "65px", marginBottom: "50px" }}
    >
      <div style={{ width: "50px", marginRight: "20px" }}>
        <CircularImage src="/person.png" />
        {review.displayName}
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <StarRatings
            starRatedColor="#FEBD11"
            starDimension="20px"
            rating={review.rating}
          />
          <div style={{ marginLeft: "20px" }}>{review.timePosted} </div>
        </div>
        <div className="reviewText mt-3">
           {review.review}
        </div>
      </div>
    </div>
  );
  
};

export default RestaurantReview;
