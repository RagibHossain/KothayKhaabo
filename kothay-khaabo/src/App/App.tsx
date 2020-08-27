import React, {Fragment } from "react";
import "./App.css";
import SiteNav from "../Features/Nav/SiteNav";
import RestaurantDashboard from "../Features/Restaurants/RestaurantDashboard";
import { Switch, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Home from "../Features/Home/Home";
import {ToastContainer} from "react-toastify";
function App() {
  
  return (
    <div>
      {/* <SiteNav /> */}
      <ToastContainer position="top-right"/>
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
