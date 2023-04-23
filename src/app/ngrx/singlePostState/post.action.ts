import {Action} from "@ngrx/store";
import {Book} from "../../model/book.model";


export enum PostActionType{
  GET_POST="[POST] GET POST",
}

export class GetPostAction implements Action{
  type: PostActionType = PostActionType.GET_POST;
  constructor(public payload : Book) {
  }
}

export type PostAction = GetPostAction;



