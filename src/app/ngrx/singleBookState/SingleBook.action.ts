import {Action} from "@ngrx/store";
import {Book} from "../../model/book.model";


export enum PostActionType{
  GET_ONE_BOOK="[ONE BOOK] GET ONE BOOK ",
  EDIT_ONE_BOOK="[EDIT BOOK] EDIT BOOK ",
}

export class GetSingleBookAction implements Action{
  type: PostActionType = PostActionType.GET_ONE_BOOK;
  constructor(public payload : Book) {
  }
}

export class EditBookAction implements Action{
  type: PostActionType = PostActionType.EDIT_ONE_BOOK;
  constructor(public payload : Book) {
  }
}


export type SingleBookAction = GetSingleBookAction;



