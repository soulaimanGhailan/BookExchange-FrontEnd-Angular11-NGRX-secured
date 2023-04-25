import {Book} from "../../model/book.model";
import {Action} from "@ngrx/store";
import {PostAction, PostActionType} from "./post.action";
export enum PostStateEnum{
  LOADED ="Loaded",
  INITIAL="Initial"
}
export interface PostState{
  book:Book | null ;
  errorMessage:string;
  dataState:PostStateEnum;
}
const initialState : PostState = {book:null   ,  errorMessage:"" , dataState :PostStateEnum.INITIAL}
export function postReducer(state : PostState  = initialState , action : Action):PostState{
  switch (action.type){
    case PostActionType.GET_POST : return {...state , dataState:PostStateEnum.LOADED , book:(<PostAction>action).payload} ; break;
    default : return {...state}; break;
  }
}
