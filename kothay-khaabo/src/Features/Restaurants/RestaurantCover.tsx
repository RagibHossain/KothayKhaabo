import React from "react";

const RestaurantCover: React.FC<{ src: string }> = ({ src }) => {
  return (
    <div className="coverDiv">
      <div className="coverImageInnerDiv" >
        <img className="coverImage" src={src} alt="img" />
      </div>
    </div>
  );
};

export default RestaurantCover;
