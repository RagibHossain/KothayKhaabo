import React from "react";
import { observer } from "mobx-react-lite";
interface IProps {
  onclickMethod: () => void;
  text : string;
}
const MainButton: React.FC<IProps> = ({ onclickMethod ,text}) => {
  return (
    <div>
      <div className="buttonDiv">
        <button onClick={() => onclickMethod()} className="custombtn">
          {text}
        </button>
      </div>
    </div>
  );
};

export default observer(MainButton);
