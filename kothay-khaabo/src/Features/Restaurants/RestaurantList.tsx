import React from "react";
import Restaurant from "./Restaurant";
import { observer } from "mobx-react-lite";
import Slider from "react-slick";
import SubHeader from "../Home/SubHeader";
import { IRestaurant } from "../../Common/Models/Restaurant";
interface IProps{
  restaurants : IRestaurant[];
  title : string;
  subTitle: string;
}
const RestaurantList : React.FC<IProps> = ({restaurants,title,subTitle}) => {
 
  const settings = {
    dots: false,
    infinite: true,
    swipeToSlide:true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="restaurantList">
      
       <SubHeader image={title === "Burger Shops" ? "bglogo.jpg" : "pizzalogo.jpg"} title={title}subTitle={subTitle}/>
      <Slider {...settings}>
        {restaurants &&
          restaurants.map((restaurant) => (
            <div key={restaurant.id}>
              <Restaurant restaurant={restaurant} />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default observer(RestaurantList);
