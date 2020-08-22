import React, { useContext } from "react";
import RestaurantList from "./RestaurantList";
import { Container } from "react-bootstrap";
import KothayKhaaboInfo from "../Home/KothayKhaaboInfo";
import  { restaurantStoreContext } from "../../Common/Stores/restauantStore";
import { observer } from "mobx-react-lite";
import Loading from "../Loader/Loading";

const RestaurantDashboard = () => {
  const {loading}  = useContext(restaurantStoreContext);
  return (
    <div className="dashboard">
      <Container>
        <KothayKhaaboInfo />
        {loading ? <Loading/> : <RestaurantList />}
                
      </Container>
    </div>
  );
};

export default observer(RestaurantDashboard);
