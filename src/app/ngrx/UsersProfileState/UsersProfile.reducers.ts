import {PageInfo} from "../../model/pageInfo.model";
import {User} from "../../model/user.model";
import {Action} from "@ngrx/store";
import {CommentsState, CommentStateEnum} from "../commentsState/comment.reducer";
import {CommentAction, CommentsActionType} from "../commentsState/comment.action";
import {GetOtherProfileActionType, OtherProfilesAction} from "./UsersProfile.action";

export enum UsersProfileStateEnum {
  LOADING="Loading",
  LOADED ="Loaded",
  ERROR = "Error",
  INITIAL="Initial",
}
export interface UsersProfileState{
  profiles : User[];
  errorMessage:string;
  dataState : UsersProfileStateEnum;
  pageInfo : PageInfo;
}

const initialState : UsersProfileState  = {profiles : [] , errorMessage:'' , dataState :UsersProfileStateEnum.INITIAL , pageInfo :{totalPages :0 ,  totalElements:0}}
export function userProfileReducer(state : UsersProfileState = initialState , action : Action):UsersProfileState {
    switch (action.type){
      case  GetOtherProfileActionType.GET_OTHER_PROFILE :return {...state, dataState: UsersProfileStateEnum.LOADING } ;break;
      case  GetOtherProfileActionType.GET_OTHER_PROFILE_SUCCESS :
        return {...state, dataState: UsersProfileStateEnum.LOADED, profiles:[(<OtherProfilesAction>action).payload.data], pageInfo: (<OtherProfilesAction>action).payload.pageInfo};break;
      case  GetOtherProfileActionType.GET_OTHER_PROFILE_ERROR :return {...state, dataState: UsersProfileStateEnum.ERROR, errorMessage: (<OtherProfilesAction>action).payload}; break;

      default : return {...state} ; break;
    }
}
