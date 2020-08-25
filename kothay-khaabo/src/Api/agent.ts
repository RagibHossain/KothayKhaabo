import Axios, { AxiosResponse } from "axios";
import { IRestaurant } from "../Common/Models/Restaurant";
import { IUserForm, IUser } from "../Common/Models/User";

Axios.defaults.baseURL = "http://localhost:5000";

Axios.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("token");
    if(token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

const responseBody = (response : AxiosResponse) => response.data;

const sleep = (ms: number) => (response: AxiosResponse) =>
  new Promise<AxiosResponse>((resolve) =>
    setTimeout(() => resolve(response), ms)
  );

const requests = {
    get : (url : string) => Axios.get(url).then(sleep(1000)).then(responseBody),
    post : (url : string,body : {}) => Axios.post(url,body).then(responseBody),
    put : (url : string,body : {}) => Axios.put(url,body).then(responseBody),
    del : (url : string) => Axios.delete(url).then(responseBody)
}

const Restaurants ={
    List : () : Promise<IRestaurant[]> => requests.get("/restaurant"),
    Details : (id : string) => requests.get(`/restaurant/${id}`),
    Edit : (restaurant : IRestaurant) => requests.put(`/restaurant/${restaurant.id}`,restaurant),
    Add : (restaurant : IRestaurant) => requests.post("/restaurant",restaurant),
    Delete : (id : string) => requests.del(`/restaurant/${id}`)
}

const User = {
  Login :  (user : IUserForm) : Promise<IUser> => requests.post("/user/login",user),
  Register : (user : IUserForm) : Promise<IUser>  => requests.post("/user/register",user)
}

export default {
    Restaurants,
    User
};