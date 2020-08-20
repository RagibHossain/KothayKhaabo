import React from "react";
import { Image } from "react-bootstrap";

const KothayKhaaboInfo = () => {
    const image = {
        width: "60%"
    }
  return (
    <div>
      <div className="homeImage">
        <img src="logo.PNG" style={image} />
      </div>
    </div>
  );
};

export default KothayKhaaboInfo;
