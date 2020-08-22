import {observable, action} from "mobx"
import { IRestaurant } from "../Models/Restaurant";
import agent from "../../Api/agent";
import { createContext } from "react";

export default class RestaurantStore{
  @observable loading = false;
  @observable restaurants : IRestaurant[] = []; 
  
  @action loadRestaurants = async () => {
    this.loading = true;
      try{
        const restaurants = await agent.Restaurants.List();
        this.loading = false;
        restaurants.forEach((restaurant) => {
            this.restaurants.push(restaurant);
        })
      }catch(ex)
      {
        this.loading = false;
          console.log(ex);
      }
      
      
       
  }
};

export const restaurantStoreContext = createContext(new RestaurantStore());