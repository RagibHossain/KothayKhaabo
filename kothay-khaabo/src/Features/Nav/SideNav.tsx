import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { userStoreContext } from "../../Common/Stores/userStore";

const SideNav = () => {
    const {setLoginPage,setRegisterPage} = useContext(userStoreContext);
  return (
    <div>
      <div className="sidenav">
        <div className="login-main-text">
          <h1 className="text-center">Can't decide where to eat ? <br/> You Came to the Right Place</h1>
          <div className="buttongroup">
              <div className="buttonDiv">
              <button onClick={() => setLoginPage()} className="custombtn">Login</button>
              </div>
              <div className="buttonDiv">
              <button onClick={() => setRegisterPage()} className="custombtn">Register</button>
              </div>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(SideNav);
