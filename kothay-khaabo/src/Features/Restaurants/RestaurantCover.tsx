import React from "react";

const RestaurantCover: React.FC<{ src: string }> = ({ src }) => {
  return (
    <div className="coverDiv">
      <div className="coverImageInnerDiv" >
        <img className="coverImage" style={{borderRadius:"50%"}} src={src} alt="img" />
      </div>
    </div>
  );
};

export default RestaurantCover;
