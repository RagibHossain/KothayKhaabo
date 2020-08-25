export interface IUser{
    displayName : string;
    token : string ;
    userName : string ;
}

export interface IUserForm{
    email : string; 
    userName : string;
    displayName : string;
    password : string;
    confirmPassword : string;
}