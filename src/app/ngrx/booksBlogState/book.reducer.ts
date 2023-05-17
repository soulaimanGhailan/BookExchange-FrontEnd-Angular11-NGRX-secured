import {Book} from "../../model/book.model";
import {Action} from "@ngrx/store";
import {BookAction, BookActionType} from "./book.action";
import {PageInfo} from "../../model/pageInfo.model";
export enum BooksStateEnum{
  LOADING="Loading",
  LOADED ="Loaded",
  ERROR = "Error",
  INITIAL="Initial",
  NEW="new"
}
export enum FetchState {
  All = 'all',
  SearchByKeyWord = 'searchByKeWord' ,
  SearchByCategory = "SearchByCategory",
  GetBooksOfUser = "GetBooksOfUser",
}
export interface BookState {
  books : Book[];
  errorMessage:string;
  dataState:BooksStateEnum;
  pageInfo: PageInfo;
  fetchStatus : FetchState;
}
const initialBookBlogState : BookState = {books : [] , errorMessage : '' , dataState :BooksStateEnum.INITIAL , pageInfo:{ totalPages:0 , totalElements:0} , fetchStatus:FetchState.All};
export function booksBlogReducer(state:BookState = initialBookBlogState , action :Action) : BookState{
    switch (action.type){
      //get all
      case  BookActionType.GET_BOOkS_PAGE : return {...state , dataState : BooksStateEnum.LOADING} ; break;
      case  BookActionType.GET_BOOkS_PAGE_SUCCESS :
        return {...state , dataState : BooksStateEnum.LOADED , books:(<BookAction>action).payload.data ,
                pageInfo:(<BookAction>action).payload.pageInfo , fetchStatus:FetchState.All}; break;
      case  BookActionType.GET_BOOkS_PAGE_ERROR : return {...state , dataState : BooksStateEnum.ERROR , errorMessage:(<BookAction>action).payload}; break;

      //search by keyword
      case  BookActionType.SEARCH_BOOk_KEYWORD : return {...state , dataState : BooksStateEnum.LOADING}; break;
      case  BookActionType.SEARCH_BOOk_KEYWORD_SUCCESS :
        return {...state , dataState : BooksStateEnum.LOADED , books:(<BookAction>action).payload.data ,
              pageInfo:(<BookAction>action).payload.pageInfo ,fetchStatus:FetchState.SearchByKeyWord}; break;
      case  BookActionType.SEARCH_BOOk_KEYWORD_ERROR : return {...state , dataState : BooksStateEnum.ERROR , errorMessage:(<BookAction>action).payload}; break;
      // search by category
      case  BookActionType.SEARCH_BOOk_CATEGORY : return {...state , dataState : BooksStateEnum.LOADING}; break;
      case  BookActionType.SEARCH_BOOk_CATEGORY_SUCCESS :
        return {...state , dataState : BooksStateEnum.LOADED , books:(<BookAction>action).payload.data ,
          pageInfo:(<BookAction>action).payload.pageInfo ,fetchStatus:FetchState.SearchByCategory}; break;
      case  BookActionType.SEARCH_BOOk_CATEGORY_ERROR : return {...state , dataState : BooksStateEnum.ERROR , errorMessage:(<BookAction>action).payload}; break;

      //get books of user
      case  BookActionType.GET_BOOk_OfUSER : return {...state , dataState : BooksStateEnum.LOADING}; break;
      case  BookActionType.GET_BOOk_OfUSER_SUCCESS :
        return {...state , dataState : BooksStateEnum.LOADED , books:(<BookAction>action).payload.data ,
          pageInfo:(<BookAction>action).payload.pageInfo ,fetchStatus:FetchState.GetBooksOfUser}; break;
      case  BookActionType.GET_BOOk_OfUSER_ERROR : return {...state , dataState : BooksStateEnum.ERROR , errorMessage:(<BookAction>action).payload}; break;

      default : return {...state}; break;
    }

}
