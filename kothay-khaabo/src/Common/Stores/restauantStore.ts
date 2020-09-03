import { observable, action } from "mobx";
import { IRestaurant, IReview } from "../Models/Restaurant";
import agent from "../../Api/agent";
import RootStore from "./rootStore";
import { toast } from "react-toastify";

export default class RestaurantStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable loading = false;
  @observable restaurants: IRestaurant[] = [];
  @observable burgerShops: IRestaurant[] = [];
  @observable pizzaShops: IRestaurant[] = [];
  @observable selectedRestaurant: IRestaurant | null = null;
  @observable newReviewUploaded = false;
  @action loadRestaurants = async () => {
    this.loading = true;

    try {
      const restaurants = await agent.Restaurants.List();
      restaurants.forEach((restaurant) => {
        this.restaurants.push(restaurant);
      });
      console.log(restaurants);
      this.burgerShops = restaurants.filter((e) => e.meals === "Burgers");
      this.pizzaShops = restaurants.filter((e) => e.meals === "Pizza");
      this.rootStore.commonStore.apploaded = true;
      this.loading = false;
    } catch (ex) {
      this.loading = false;
      toast.error("Log in to view this page");
    }
  };
  @action selectRestaurant = (restaurant: IRestaurant) => {
    this.selectedRestaurant = restaurant;
  };
  @action loadSelectedRestaurant = async (id: string) => {
    try {
      this.selectedRestaurant = await agent.Restaurants.Details(id);
      console.log(this.selectedRestaurant);
      return this.selectedRestaurant;
    } catch (ex) {
      console.log(ex);
    }
  };
  @action uploadReview = async (review : IReview) => {
    
    try{
       await agent.Restaurants.UploadReview(review);
       this.selectedRestaurant?.restaurantReviews.push(review);
       this.newReviewUploaded = true;
    }catch(ex)
    {
      console.log(ex);
    }
  }
  @action setNewReviewUploaded = (value : boolean) => {
    this.newReviewUploaded = value;
  }
}
