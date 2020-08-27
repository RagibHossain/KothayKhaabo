import { observable, action } from "mobx";
import RootStore from "./rootStore";

export default class CommonStore{
    rootStore : RootStore;
    constructor(rootStore : RootStore) {
        this.rootStore = rootStore;
    }
    @observable apploaded = false;
    @observable loginPage = false;
    @observable registerPage = false;
    @action setLoginPage = () => {
        this.loginPage = true;
        this.registerPage = false;
      };
      @action setRegisterPage = () => {
        this.loginPage = false;
        this.registerPage = true;
      };
}