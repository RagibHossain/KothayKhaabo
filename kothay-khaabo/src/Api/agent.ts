import Axios, { AxiosResponse } from "axios";
import { IRestaurant, IReview } from "../Common/Models/Restaurant";
import { IUserForm, IUser } from "../Common/Models/User";
import { toast } from "react-toastify";
import { history } from "..";

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
);

Axios.interceptors.response.use(undefined,(error) => {
  console.log(error);
  if (error.message === "Network Error" && !error.response) {
    toast.error("Network error -- make sure API server is running");
  }
  const { status, data, config } = error.response;
  if (status === 404) {
    history.push("/notFoundeekdom");
  }
  if (
    status === 400 &&
    config.method === "get" &&
    data.errors.hasOwnProperty("id")
  ) {
    history.push("/notFound");
  }
  if (status === 500) {
    toast.error("Server Error Check the terminal for more info");
  }
  if(status === 401)
  {
    // if an expired token is in the browser
    if(window.localStorage.getItem("token"))
     {
       window.localStorage.removeItem("token");
     }
    //toast.error("A token is there but not valid");
  }
  throw error.response;
});

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
    Delete : (id : string) => requests.del(`/restaurant/${id}`),
    UploadReview : (review : IReview) => requests.post(`/restaurant/${review.restaurantId}`,review)
}

const User = {
  current: (): Promise<IUser> => requests.get("/user"),
  Login :  (user : IUserForm) : Promise<IUser> => requests.post("/user/login",user),
  Register : (user : IUserForm) : Promise<IUser>  => requests.post("/user/register",user)
}

export default {
    Restaurants,
    User
};