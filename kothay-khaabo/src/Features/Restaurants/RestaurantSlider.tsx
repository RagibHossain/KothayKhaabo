import React from "react";
import { Wrapper } from "../../Common/Buttons/CarouselWrapper";
import RestaurantList from "./RestaurantList";
import { IRestaurant } from "../../Common/Models/Restaurant";

import { observer } from "mobx-react-lite";
interface IProps {
  restaurants: IRestaurant[];
  title: string;
  subTitle: string;
}
const RestaurantSlider: React.FC<IProps> = ({
  restaurants,
  title,
  subTitle,
}) => {

  return (
    <Wrapper>
      
      <RestaurantList
        restaurants={restaurants}
        title={title}
        subTitle={subTitle}
      />
      
    </Wrapper>
  );
};

export default observer(RestaurantSlider);
