import React, { useEffect, useContext } from "react";
import "./App.css";
import SiteNav from "../Features/Nav/SiteNav";
import RestaurantDashboard from "../Features/Restaurants/RestaurantDashboard";
import { Switch, Route } from "react-router-dom";
import KothayKhaaboInfo from "../Features/Home/KothayKhaaboInfo";
import { restaurantStoreContext } from "../Common/Stores/restauantStore";

function App() {
  const {loadRestaurants}  = useContext(restaurantStoreContext);
  useEffect(() => {
     loadRestaurants();
   },[loadRestaurants])
  return (
    <div>
      <SiteNav />
    <Switch>
      <Route path="/" exact component={KothayKhaaboInfo} />
      <Route path="/home" component={RestaurantDashboard} />
    </Switch>
    </div>

  );
}

export default App;
