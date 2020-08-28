import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { rootStoreContext } from "../../Common/Stores/rootStore";
import RestaurantSlider from "./RestaurantSlider";

const RestaurantDashboard = () => {
  const rootStore  = useContext(rootStoreContext);
  const { loadRestaurants } = rootStore.restaurantStore;
  const {apploaded} = rootStore.commonStore;
  useEffect(() => {
    if(!apploaded)
    loadRestaurants();
  }, [loadRestaurants,apploaded]);
  const {burgerShops,pizzaShops} = rootStore.restaurantStore;
  return (
    <div className="dashboard">
     
       <RestaurantSlider restaurants={burgerShops} title="Burger Shops" subTitle="Eat clean to stay fit, have a burger to stay sane."/>
       <RestaurantSlider restaurants={pizzaShops} title="Pizza Shops" subTitle="You can't buy happiness. But you can buy pizza, and that's kind of the same thing."/>
    
    </div>
  );
};

export default observer(RestaurantDashboard);
