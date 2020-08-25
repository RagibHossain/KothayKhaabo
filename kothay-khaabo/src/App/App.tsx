import React, { useEffect, useContext, Fragment } from "react";
import "./App.css";
import SiteNav from "../Features/Nav/SiteNav";
import RestaurantDashboard from "../Features/Restaurants/RestaurantDashboard";
import { Switch, Route } from "react-router-dom";
import { restaurantStoreContext } from "../Common/Stores/restauantStore";
import { observer } from "mobx-react-lite";
import Home from "../Features/Home/Home";

function App() {
  const { loadRestaurants } = useContext(restaurantStoreContext);
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);
  return (
    <div>
      {/* <SiteNav /> */}
      <Route path="/" exact component={Home} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <SiteNav />
            <Switch>
              <Route path="/home" component={RestaurantDashboard} />
            </Switch>
          </Fragment>
        )}
      />
    </div>
  );
}

export default observer(App);
