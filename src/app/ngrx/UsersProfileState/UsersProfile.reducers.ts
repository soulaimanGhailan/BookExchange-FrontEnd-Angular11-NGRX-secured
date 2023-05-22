import {PageInfo} from "../../model/pageInfo.model";
import {User} from "../../model/user.model";
import {Action} from "@ngrx/store";
import {GetProfileActionType, OtherProfilesAction} from "./UsersProfile.action";

export enum UsersProfileStateEnum {
  LOADING="Loading",
  LOADED ="Loaded",
  ERROR = "Error",
  INITIAL="Initial",
}
export interface UsersProfileState{
  profiles : User | null;
  errorMessage:string;
  dataState : UsersProfileStateEnum;
}

const initialState : UsersProfileState  = {profiles : null , errorMessage:'' , dataState :UsersProfileStateEnum.INITIAL }
export function userProfileReducer(state : UsersProfileState = initialState , action : Action):UsersProfileState {
    switch (action.type){
      case  GetProfileActionType.GET_PROFILE :return {...state, dataState: UsersProfileStateEnum.LOADING } ;break;
      case  GetProfileActionType.GET_PROFILE_SUCCESS :
        return {...state, dataState: UsersProfileStateEnum.LOADED, profiles:(<OtherProfilesAction>action).payload, };break;
      case  GetProfileActionType.GET_PROFILE_ERROR :return {...state, dataState: UsersProfileStateEnum.ERROR, errorMessage: (<OtherProfilesAction>action).payload}; break;

      default : return {...state} ; break;
    }
}
