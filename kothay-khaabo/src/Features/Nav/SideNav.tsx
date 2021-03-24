import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import MainButton from "../../Common/Buttons/MainButton";
import { history } from "../..";
import { rootStoreContext } from "../../Common/Stores/rootStore";

const SideNav = () => {
  const rootStore = useContext(rootStoreContext);
  const { setLoginPage, setRegisterPage } =rootStore.commonStore;
  const {token} = rootStore.userStore;
  const {loginPage,registerPage} = rootStore.commonStore;
   const jwt = token ? token : window.localStorage.getItem("token");
  const redirectToRestaurant = () => {
    history.push("/home");
  };
  return (
    <div>
      <div className="sidenav">
        <div className="login-main-text">
          <h1 className="text-center">
            Can't decide where to eat ? <br /> You Came to the Right Place
          </h1>
          <div className="buttongroup">
            {jwt ? (
              <MainButton
                text="Let's See What's inside"
                onclickMethod={redirectToRestaurant}
              />
            ) : (
              <div  className="buttongroup">
                <MainButton text="Login" onclickMethod={setLoginPage} />
                <MainButton text="Register" onclickMethod={setRegisterPage} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(SideNav);
