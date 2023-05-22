export interface User{
  userId : string;
  firstname:string;
  phoneNumber:string;
  lastname:string;
  imageContentBase64 : string ;
  email : string;
}
export interface Address{
  country : string;
  city : string;
  homeAddress: string;
  postCode : string;
}
export interface LoggedInUser {
  userId : string |undefined;
  username : string | undefined;
}
export const SIZE_OWNED_BOOKS_PAGING  = 4;
