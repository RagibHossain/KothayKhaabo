import React, { useState, useContext } from "react";
import SubHeader from "../Home/SubHeader";
import { IRestaurant } from "../../Common/Models/Restaurant";
import RestaurantReview from "./RestaurantReview";
import NoReviews from "./NoReviews";
import ReviewModal from "../../Modals/ReviewModal";
import { rootStoreContext } from "../../Common/Stores/rootStore";
import { observer } from "mobx-react-lite";
interface IProps {
  restaurant: IRestaurant;
}
const RestaurantReviewList: React.FC<IProps> = ({ restaurant }) => {
  let i = 0;
  const [modal, showModal] = useState(false);
  const rootStore = useContext(rootStoreContext);
  const { user } = rootStore.userStore;
  const alreadyRated = restaurant.restaurantReviews.filter(
    (x) => x.username === user?.username
  )[0];
  return (
    <div className="reviewList mt-5 ">
      <div className="d-flex p-3">
        <SubHeader
          image="/reviewIcon.png"
          title={`Ratings and Reviews (${restaurant.totalReviews})`}
        />
        {!alreadyRated && (
          <div className="ml-auto mt-3 mr-5">
            <button
              className="submitButton"
              onClick={() => showModal(true)}
              style={{ width: "100%", height: "50%" }}
              type="submit"
            >
              Write a review
            </button>
          </div>
        )}
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
      <ReviewModal
        modal={modal}
        user={user!}
        id={restaurant.id}
        showModal={showModal}
      />
    </div>
  );
};

export default observer(RestaurantReviewList);
