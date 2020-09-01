import React from "react";
interface IProps {
  image: string;
  title: string;
  subTitle?: string;
}
const SubHeader: React.FC<IProps> = ({ image, title, subTitle }) => {
  return (
    <div className="subHeader  ml-5 mb-3 ">
      <div className="icon">
        <img src={image} className="iconImage" alt="icon"/>
      </div>
      <div className="info ml-3">
        <div className="title">{title}</div>
        <div className="subTitle">{subTitle}</div>
      </div>
    </div>
  );
};

export default SubHeader;
