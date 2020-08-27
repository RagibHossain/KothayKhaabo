import UserStore from "./userStore"
import RestaurantStore from "./restauantStore";
import CommonStore from "./commonStore";
import { createContext } from "react";

export default class RootStore{
    userStore : UserStore;
    restaurantStore : RestaurantStore;
    commonStore : CommonStore;

    constructor() {
        this.userStore = new UserStore(this);
        this.commonStore = new CommonStore(this);
        this.restaurantStore = new RestaurantStore(this);
    }
}

export const rootStoreContext = createContext(new RootStore());