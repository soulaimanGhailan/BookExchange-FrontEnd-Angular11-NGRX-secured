import {Book} from "../../model/book.model";
import {Action} from "@ngrx/store";
import {SingleBookAction, PostActionType} from "./SingleBook.action";
export enum BookStateEnum{
  LOADED ="Loaded",
  INITIAL="Initial" ,
  EDIT ="Edit"
}
export interface SingleBookState {
  book:Book | null ;
  errorMessage:string;
  dataState:BookStateEnum;
}
const initialState : SingleBookState = {book:null   ,  errorMessage:"" , dataState :BookStateEnum.INITIAL}
export function singleBookReducer(state : SingleBookState  = initialState , action : Action):SingleBookState{
  switch (action.type){
    case PostActionType.GET_ONE_BOOK : return {...state , dataState:BookStateEnum.LOADED , book:(<SingleBookAction>action).payload} ; break;
    //edit
    case PostActionType.EDIT_ONE_BOOK : return {...state , dataState:BookStateEnum.EDIT , book:(<SingleBookAction>action).payload} ; break;
    default : return {...state}; break;
  }
}
