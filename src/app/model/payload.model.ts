import {PageInfo, PageSize} from "./pageInfo.model";
import {CreatedBook} from "./book.model";

export interface ResultPayLoad<T>{
  data :T;
  pageInfo : PageInfo;
}

export interface ActionPayload<T>{
  pageSize:PageSize;
  data : T;
}
export enum SearchType{
  CATEGORY = "Category",
  KEYWORD  = "Keyword",
  ALL = "ALL"

}
export interface BookUerId{
  userId : string ;
  book  : CreatedBook;
}
export enum UpdateUserFieldType{
  UpdatePICTURE = "UpdatePICTURE" ,
  UpdateCITY = "UpdateCITY" ,
  UpdateCOUNTRY = "UpdateCOUNTRY" ,
  UpdateHOMEADDRESS = "UpdateHOMEADDRESS" ,
  UpdatePhoneNum = "UpdatePhoneNum" ,
}
export interface UpdateUserPayload {
  updateUserFieldType : UpdateUserFieldType ;
  userId : string|undefined;
  data : string ;

}
