import React from "react";
import { Jumbotron } from "react-bootstrap";

const Header : React.FC<{content : string,description : string}> = ({content,description}) => {
  const jumbotron = {
    backgroundColor : "#1B1B1B"
  } 
  const text = {
    color : "#ffffff"
  }
  return (
    <div>
      <Jumbotron style={jumbotron} fluid>
       
          <h1 style={text} className="text-center button-font">{content}</h1>
          <p style={text} className="text-center button-font">
            {description}
          </p>
        
      </Jumbotron>
    </div>
  );
};

export default Header;
