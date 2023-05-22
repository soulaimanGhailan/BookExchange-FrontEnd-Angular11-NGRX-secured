import {Action} from "@ngrx/store";
import {ActionPayload, BookUerId, ResultPayLoad} from "../../model/payload.model";
import {Book, CreatedBook} from "../../model/book.model";

export enum BookActionType{
  GET_BOOkS_PAGE="[Book] Get Books page",
  GET_BOOkS_PAGE_SUCCESS="[Book] Get  Books page Success",
  GET_BOOkS_PAGE_ERROR="[Book] Get  Books page Error",

  //search book by keyword action
  SEARCH_BOOk_KEYWORD="[Book] search  Book by keyword",
  SEARCH_BOOk_KEYWORD_SUCCESS="[Book] search  Book by keyword Success",
  SEARCH_BOOk_KEYWORD_ERROR="[Book] search  Book by keyword Error",

  //search book by category action
  SEARCH_BOOk_CATEGORY="[Book] search  Book by category",
  SEARCH_BOOk_CATEGORY_SUCCESS="[Book] search  Book by category Success",
  SEARCH_BOOk_CATEGORY_ERROR="[Book] search  Book by category Error",

  //search book by category action
  GET_BOOk_OfUSER="[Book] GET  Books of user",
  GET_BOOk_OfUSER_SUCCESS="[Book] GET  Books of user Success",
  GET_BOOk_OfUSER_ERROR="[Book] GET  Books of user Error" ,

  //SAVE new book
  SAVE_BOOk_OfUSER="[Book] SAVE  Books of user",
  SAVE_BOOk_OfUSER_SUCCESS="[Book] SAVE  Books of user Success",
  SAVE_BOOk_OfUSER_ERROR="[Book] SAVE  Books of user Error",

  //DELETE new book
  DELETE_BOOk_OfUSER="[Book] DELETE  Books of user",
  DELETE_BOOk_OfUSER_SUCCESS="[Book] DELETE  Books of user Success",
  DELETE_BOOk_OfUSER_ERROR="[Book] DELETE  Books of user Error"
}


export class GetBooksPageAction implements Action{
  type: BookActionType = BookActionType.GET_BOOkS_PAGE;
  // any would be of type pageSize{page : , size:}
  constructor(public payload : any) {
  }
}
export class GetBooksPageActionSuccess implements Action{
  type: BookActionType = BookActionType.GET_BOOkS_PAGE_SUCCESS;
  constructor(public payload : ResultPayLoad<Book[]>) {
  }
}
export class GetBooksPageActionError implements Action{
  type: BookActionType = BookActionType.GET_BOOkS_PAGE_ERROR;
  constructor(public payload : string) {
  }
}


//search by keyword
export class SearchBookKeywordAction implements Action{
  type: BookActionType = BookActionType.SEARCH_BOOk_KEYWORD;
  // paylaod : {keyword , pageSize}
  constructor(public payload : ActionPayload<string>) {
  }
}
export class SearchBookKeywordActionSuccess implements Action{
  type: BookActionType = BookActionType.SEARCH_BOOk_KEYWORD_SUCCESS;
  constructor(public payload : ResultPayLoad<Book[]>) {
  }
}
export class SearchBookKeywordActionError implements Action{
  type: BookActionType = BookActionType.SEARCH_BOOk_KEYWORD_ERROR;
  constructor(public payload : string) {
  }
}

//search  Book by Category action
export class SearchBookCategoryAction implements Action{
  type: BookActionType = BookActionType.SEARCH_BOOk_CATEGORY;
  // paylaod : {keyword , pageSize}
  constructor(public payload : ActionPayload<string>) {
  }
}
export class SearchBookCategoryActionSuccess implements Action{
  type: BookActionType = BookActionType.SEARCH_BOOk_CATEGORY_SUCCESS;
  constructor(public payload : ResultPayLoad<Book[]>) {
  }
}
export class SearchBookCategoryActionError implements Action{
  type: BookActionType = BookActionType.SEARCH_BOOk_CATEGORY_ERROR;
  constructor(public payload : string) {
  }
}

//search  Book of user action
export class GetBooksOfUserAction implements Action{
  type: BookActionType = BookActionType.GET_BOOk_OfUSER;
  // paylaod : {keyword , pageSize}
  constructor(public payload : ActionPayload<string>) {
  }
}
export class GetBooksOfUserActionSuccess implements Action{
  type: BookActionType = BookActionType.GET_BOOk_OfUSER_SUCCESS;
  constructor(public payload : ResultPayLoad<Book[]>) {
  }
}
export class GetBooksOfUserActionError implements Action{
  type: BookActionType = BookActionType.GET_BOOk_OfUSER_ERROR;
  constructor(public payload : string) {
  }
}


//Save  Book of user action
export class SaveBooksOfUserAction implements Action{
  type: BookActionType = BookActionType.SAVE_BOOk_OfUSER;
  constructor(public payload : BookUerId) {
  }
}
export class SaveBooksOfUserActionSuccess implements Action{
  type: BookActionType = BookActionType.SAVE_BOOk_OfUSER_SUCCESS;
  constructor(public payload : Book) {
  }
}
export class SaveBooksOfUserActionError implements Action{
  type: BookActionType = BookActionType.SAVE_BOOk_OfUSER_ERROR;
  constructor(public payload : string) {
  }
}

//DELETE  Book of user action
export class DELETEBooksOfUserAction implements Action{
  type: BookActionType = BookActionType.DELETE_BOOk_OfUSER;
  constructor(public payload : number) {
  }
}
export class DELETEBooksOfUserActionSuccess implements Action{
  type: BookActionType = BookActionType.DELETE_BOOk_OfUSER_SUCCESS;
  constructor(public payload : Book) {
  }
}
export class DELETEBooksOfUserActionError implements Action{
  type: BookActionType = BookActionType.DELETE_BOOk_OfUSER_ERROR;
  constructor(public payload : string) {
  }
}

export type BookAction =
  GetBooksPageAction | GetBooksPageActionError | GetBooksPageActionSuccess
  |SearchBookKeywordAction |SearchBookKeywordActionError|SearchBookKeywordActionSuccess
  |SearchBookCategoryAction|SearchBookCategoryActionSuccess|SearchBookCategoryActionError
  |GetBooksOfUserAction|GetBooksOfUserActionSuccess|GetBooksOfUserActionError
  |SaveBooksOfUserAction | SaveBooksOfUserAction|SaveBooksOfUserAction
  |DELETEBooksOfUserAction|DELETEBooksOfUserActionSuccess|DELETEBooksOfUserActionError;
