import {Action} from "@ngrx/store";
import {ResultPayLoad, UpdateUserPayload} from "../../model/payload.model";

import {User} from "../../model/user.model";

export enum ProfileActionType {
  GET_PROFILE = "[GetProfile] getProfile",
  GET_PROFILE_SUCCESS = "[GetProfile] getProfile Success",
  GET_PROFILE_ERROR = "[GetProfile] getProfile Error",

  UPDATE_PROFILE = "[EditProfile] UPDATEProfile",
  UPDATE_PROFILE_SUCCESS = "[EditProfile] UPDATEProfile Success",
  UPDATE_PROFILE_ERROR = "[EditProfile] UPDATEProfile Error",

}
//Get Profile
export class GetProfileAction implements Action{
  type :ProfileActionType = ProfileActionType.GET_PROFILE;
  constructor(public payload :string) {
  }
}
export class GetProfileActionSuccess implements Action{
  type :ProfileActionType = ProfileActionType.GET_PROFILE_SUCCESS;
  constructor(public payload : User) {
  }
}
export class GetProfileActionError implements Action{
  type :ProfileActionType = ProfileActionType.GET_PROFILE_ERROR;
  constructor(public payload : any) {
  }
}

//Edit profile
export class UpdateProfileAction implements Action{
  type :ProfileActionType = ProfileActionType.UPDATE_PROFILE;
  constructor(public payload :UpdateUserPayload) {
  }
}
export class UpdateProfileActionSuccess implements Action{
  type :ProfileActionType = ProfileActionType.UPDATE_PROFILE_SUCCESS;
  constructor(public payload : User) {
  }
}
export class UpdateProfileActionError implements Action{
  type :ProfileActionType = ProfileActionType.UPDATE_PROFILE_ERROR;
  constructor(public payload : any) {
  }
}
export type ProfilesAction =
  GetProfileAction | GetProfileActionError | GetProfileActionSuccess |
UpdateProfileAction | UpdateProfileActionError | UpdateProfileActionSuccess ;
