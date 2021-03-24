import React, { Fragment, useContext, useEffect } from "react";
import "./App.css";
import SiteNav from "../Features/Nav/SiteNav";
import RestaurantDashboard from "../Features/Restaurants/RestaurantDashboard";
import { Switch, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Home from "../Features/Home/Home";
import { ToastContainer } from "react-toastify";
import RestaurantDetails from "../Features/Restaurants/RestaurantDetails";
import { rootStoreContext } from "../Common/Stores/rootStore";
function App() {
  const rootStore = useContext(rootStoreContext);
  const { getUser ,loggedIn} = rootStore.userStore;

  useEffect(() => {
    if (window.localStorage.getItem("token") ) {
      getUser();
      console.log("wow");
    }
  }, [getUser]);
  return (
    <div>
      {/* <SiteNav /> */}
      <ToastContainer position="top-right" />
      
      <Route
        path={"/"}
        render={() => (
          <Fragment>
            <SiteNav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" exact component={RestaurantDashboard} />
              <Route path="/GetAccess" exact component={Home} />
              <Route path="/restaurant/:id" component={RestaurantDetails} />
            </Switch>
          </Fragment>
        )}
      />
    </div>
  );
}

export default observer(App);
