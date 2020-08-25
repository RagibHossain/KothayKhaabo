import React from "react";
import { Jumbotron } from "react-bootstrap";

const Header : React.FC<{content : string,description : string}> = ({content,description}) => {
  
  const text = {
    color : "#1b1b1b"
  }
  return (
    <div>
      <Jumbotron  fluid>
       
          <h1 style={text} className="text-center button-font">{content}</h1>
          <p style={text} className="text-center button-font">
            {description}
          </p>
        
      </Jumbotron>
    </div>
  );
};

export default Header;
