import React, { useContext } from "react";
import Restaurant from "./Restaurant";
import { observer } from "mobx-react-lite";
import Slider from "react-slick";
import SubHeader from "../Home/SubHeader";
import { IRestaurant } from "../../Common/Models/Restaurant";
import { rootStoreContext } from "../../Common/Stores/rootStore";
import ReactLoading from "react-loading";
interface IProps {
  restaurants: IRestaurant[];
  title: string;
  subTitle: string;
}
const RestaurantList: React.FC<IProps> = ({ restaurants, title, subTitle }) => {
  const settings = {
    dots: false,
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const rootStore = useContext(rootStoreContext);
  const { loading } = rootStore.restaurantStore;
  return (
    <div className="restaurantList">
      <SubHeader
        image={title === "Burger Shops" ? "bglogo.jpg" : "pizzalogo.jpg"}
        title={title}
        subTitle={subTitle}
      />
      {loading ? (
        <ReactLoading
          type="bubbles"
          color="black"
          height={"15%"}
          width={"15%"}
        />
      ) : (
        <Slider {...settings}>
          {restaurants &&
            restaurants.map((restaurant) => (
              <div key={restaurant.id}>
                <Restaurant restaurant={restaurant} />
              </div>
            ))}
        </Slider>
      )}
    </div>
  );
};

export default observer(RestaurantList);
