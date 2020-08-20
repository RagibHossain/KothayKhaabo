import React from "react";
import RestaurantList from "./RestaurantList";
import { Container, Row, Col } from "react-bootstrap";
import KothayKhaaboInfo from "../Home/KothayKhaaboInfo";

const RestaurantDashboard = () => {
  return (
    <div className="dashboard">
      <Container>
        <KothayKhaaboInfo />
        <RestaurantList />
      </Container>
    </div>
  );
};

export default RestaurantDashboard;
