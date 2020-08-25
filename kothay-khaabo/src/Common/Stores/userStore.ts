import { observable, action } from "mobx";
import { createContext } from "react";
import agent from "../../Api/agent";
import { IUserForm } from "../Models/User";
import { history } from "../..";

export default class UserStore {
  @observable loginPage = false;
  @observable registerPage = false;
  @observable token: string | null = null;
  @action setLoginPage = () => {
    this.loginPage = true;
    this.registerPage = false;
  };
  @action setRegisterPage = () => {
    this.loginPage = false;
    this.registerPage = true;
  };
  @action login = async (user: IUserForm) => {
   
    try {
    await agent.User.Login(user).then((user) => {
          this.token = user.token;
          window.localStorage.setItem("token",user.token);
          history.push("/home");
      });
    }catch (ex) {
      console.log(ex);
    }
  };

  @action register = async (user: IUserForm) => {
      try{
        await agent.User.Register(user).then((user) => {
         this.token = user.token;
         window.localStorage.setItem("token",user.token);
         history.push("/home");
        });

      }catch(ex)
      {
          console.log(ex)
      }
   
  };
  @action logout = async () => {
      this.token = null;
      window.localStorage.clear();
      history.push("/");
  }
}

export const userStoreContext = createContext(new UserStore());
