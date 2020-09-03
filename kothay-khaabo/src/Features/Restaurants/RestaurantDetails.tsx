import React, { useContext, useEffect, Fragment } from "react";
import SubHeader from "../Home/SubHeader";
import { rootStoreContext } from "../../Common/Stores/rootStore";
import RestaurantCover from "./RestaurantCover";
import { Container } from "react-bootstrap";
import RestaurantInfoCard from "./RestaurantInfoCard";
import { RouteComponentProps } from "react-router-dom";
import { observer } from "mobx-react-lite";
import ReactLoading from "react-loading";
import RestaurantReviewList from "./RestaurantReviewList";
interface IProps {
  id: string;
}

const RestaurantDetails: React.FC<RouteComponentProps<IProps>> = ({
  match,
}) => {
  const rootStore = useContext(rootStoreContext);
  const {
    selectedRestaurant: restaurant,
    loadSelectedRestaurant,
    newReviewUploaded,
    setNewReviewUploaded
  } = rootStore.restaurantStore;

  useEffect(() => {
    if (!restaurant || newReviewUploaded ) {
      loadSelectedRestaurant(match.params.id);
      setNewReviewUploaded(false);
    }
  }, [restaurant, newReviewUploaded,setNewReviewUploaded,loadSelectedRestaurant, match.params.id]);
  return (
    <Container>
      <div className="restaurantList">
        {/*if ther is a restaurant render restaurant or loading*/}
        {restaurant ? (
          <Fragment>
            <SubHeader
              image={`/${restaurant?.image}` || "/pizzain.png"}
              title={restaurant?.restaurantName || "Pizza Inn"}
              subTitle={
                restaurant?.slogan ||
                "You love to eat pizza and we love to make it tastier for you."
              }
            />
            <RestaurantCover
              src={`/${restaurant?.image}` || "/pizzalogo.jpg"}
            />
            <RestaurantInfoCard restaurant={restaurant!} />
             <RestaurantReviewList restaurant={restaurant}/>
          </Fragment>
        ) : (
          <ReactLoading
            type="bubbles"
            color="black"
            height={"20%"}
            width={"20%"}
          />
        )}
      </div>
    </Container>
  );
};

export default observer(RestaurantDetails);
