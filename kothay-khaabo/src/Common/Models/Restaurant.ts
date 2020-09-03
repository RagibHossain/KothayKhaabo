export interface IRestaurant{
    id : string;
    restaurantName : string;
    location : string;
    rating : number;
    totalReviews:number;
    startingPrice : number;
    maxPrice : number;
    meals : string;
    image : string;
    slogan : string;
    restaurantReviews : IReview[];
}
export interface IReview{
    restaurantId: string;
    username : string;
    displayName : string;
    timePosted? : Date;
    rating : number;
    review?: string;
}
