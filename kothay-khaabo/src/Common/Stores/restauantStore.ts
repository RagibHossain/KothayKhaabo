import {observable, action} from "mobx"
import { IRestaurant } from "../Models/Restaurant";
import agent from "../../Api/agent";
import RootStore from "./rootStore";
import { toast } from "react-toastify";

export default class RestaurantStore{

  rootStore : RootStore;
  constructor(rootStore : RootStore) {
      this.rootStore = rootStore;
  }
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
        this.rootStore.commonStore.apploaded = true;
      }catch(ex)
      {
        this.loading = false;
          toast.error("Log in to view this page");
      }
    

  }
};
