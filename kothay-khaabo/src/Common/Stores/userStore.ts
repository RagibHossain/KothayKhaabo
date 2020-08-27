import { observable, action } from "mobx";
import agent from "../../Api/agent";
import { IUserForm } from "../Models/User";
import { history } from "../..";
import { toast } from "react-toastify";
import RootStore from "./rootStore";

export default class UserStore {
  rootStore : RootStore;
  constructor(rootStore : RootStore) {
      this.rootStore = rootStore;
  }

  @observable token: string | null = null;

  @action login = async (user: IUserForm) => {
    try {
      await agent.User.Login(user).then((user) => {
        this.token = user.token;
        window.localStorage.setItem("token", user.token);
        this.rootStore.commonStore.loginPage = false;
        this.rootStore.commonStore.registerPage = false;
     
      });
    } catch (ex) {
      toast.error("Incorrect User name or password");     
    }
  };

  @action register = async (user: IUserForm) => {
    try {
      await agent.User.Register(user).then((user) => {
        this.token = user.token;
        window.localStorage.setItem("token", user.token);
        this.rootStore.commonStore.loginPage = false;
        this.rootStore.commonStore.registerPage = false;
       
      });
    } catch (ex) {
      const error = ex.data.errors;
      error === "Email already Exists" ? toast.error("Email Already exists") :toast.error("Username Already exists") ;
      console.log(error);
    }
  };
  @action logout = async () => {
    this.token = null;
    window.localStorage.clear();
    history.push("/");
  };
}


