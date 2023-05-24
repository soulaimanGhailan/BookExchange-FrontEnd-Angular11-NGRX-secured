import {PageInfo} from "../../model/pageInfo.model";
import {User} from "../../model/user.model";
import {Action} from "@ngrx/store";
import {ProfileActionType, ProfilesAction} from "./UsersProfile.action";

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
      case  ProfileActionType.GET_PROFILE :return {...state, dataState: UsersProfileStateEnum.LOADING } ;break;
      case  ProfileActionType.GET_PROFILE_SUCCESS :
        return {...state, dataState: UsersProfileStateEnum.LOADED, profiles:(<ProfilesAction>action).payload, };break;
      case  ProfileActionType.GET_PROFILE_ERROR :return {...state, dataState: UsersProfileStateEnum.ERROR, errorMessage: (<ProfilesAction>action).payload}; break;

      //update Profile
      case  ProfileActionType.UPDATE_PROFILE :return {...state, dataState: UsersProfileStateEnum.LOADING } ;break;
      case  ProfileActionType.UPDATE_PROFILE_SUCCESS :
        return {...state, dataState: UsersProfileStateEnum.LOADED, profiles:(<ProfilesAction>action).payload, };break;
      case  ProfileActionType.UPDATE_PROFILE_ERROR :return {...state, dataState: UsersProfileStateEnum.ERROR, errorMessage: (<ProfilesAction>action).payload}; break;

      default : return {...state} ; break;
    }
}
