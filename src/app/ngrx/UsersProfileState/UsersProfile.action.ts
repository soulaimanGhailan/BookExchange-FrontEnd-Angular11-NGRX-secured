import {Action} from "@ngrx/store";
import { ResultPayLoad} from "../../model/payload.model";

import {User} from "../../model/user.model";

export enum GetProfileActionType {
  //init comments
  GET_PROFILE = "[OtherProfile] getOtherProfile",
  GET_PROFILE_SUCCESS = "[OtherProfile] getOtherProfile Success",
  GET_PROFILE_ERROR = "[OtherProfile] getOtherProfile Error",

}

export class GetProfileAction implements Action{
  type :GetProfileActionType = GetProfileActionType.GET_PROFILE;
  constructor(public payload :string) {
  }
}
export class GetProfileActionSuccess implements Action{
  type :GetProfileActionType = GetProfileActionType.GET_PROFILE_SUCCESS;
  constructor(public payload : User) {
  }
}
export class GetProfileActionError implements Action{
  type :GetProfileActionType = GetProfileActionType.GET_PROFILE_ERROR;
  constructor(public payload : any) {
  }
}
export type OtherProfilesAction =
              GetProfileAction | GetProfileActionError | GetProfileActionSuccess;
