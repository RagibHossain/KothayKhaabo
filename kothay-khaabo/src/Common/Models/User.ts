export interface IUser{
    displayName : string;
    token : string ;
    username : string ;
}

export interface IUserForm{
    email : string; 
    username : string;
    displayName : string;
    password : string;
    confirmPassword : string;
}