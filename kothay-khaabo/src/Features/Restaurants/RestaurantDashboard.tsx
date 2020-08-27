import React, { useContext, useEffect } from "react";
import RestaurantList from "./RestaurantList";
import { Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Loading from "../Loader/Loading";
import { rootStoreContext } from "../../Common/Stores/rootStore";

const RestaurantDashboard = () => {
  const rootStore  = useContext(rootStoreContext);
  const { loadRestaurants ,loading} = rootStore.restaurantStore;
  const {apploaded} = rootStore.commonStore;
  useEffect(() => {
    if(!apploaded)
    loadRestaurants();
  }, [loadRestaurants,apploaded]);
  return (
    <div className="dashboard">
      <Container>
        
        {loading ? <Loading/> : <RestaurantList />}
                
      </Container>
    </div>
  );
};

export default observer(RestaurantDashboard);
