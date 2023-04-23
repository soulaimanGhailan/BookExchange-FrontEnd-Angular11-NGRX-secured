import {PageInfo, PageSize} from "./pageInfo.model";

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
