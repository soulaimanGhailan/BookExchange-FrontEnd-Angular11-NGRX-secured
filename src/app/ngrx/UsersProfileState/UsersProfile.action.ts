import {Action} from "@ngrx/store";
import {ActionPayload, ResultPayLoad} from "../../model/payload.model";
import {CommentsActionType} from "../commentsState/comment.action";
import {User} from "../../model/user.model";

export enum GetOtherProfileActionType {
  //init comments
  GET_OTHER_PROFILE = "[OtherProfile] getOtherProfile",
  GET_OTHER_PROFILE_SUCCESS = "[OtherProfile] getOtherProfile Success",
  GET_OTHER_PROFILE_ERROR = "[OtherProfile] getOtherProfile Error",

}

export class GetOtherProfileAction implements Action{
  type :GetOtherProfileActionType = GetOtherProfileActionType.GET_OTHER_PROFILE;
  constructor(public payload :string) {
  }
}
export class GetOtherProfileActionSuccess implements Action{
  type :GetOtherProfileActionType = GetOtherProfileActionType.GET_OTHER_PROFILE_SUCCESS;
  constructor(public payload : ResultPayLoad<User>) {
  }
}
export class GetOtherProfileActionError implements Action{
  type :GetOtherProfileActionType = GetOtherProfileActionType.GET_OTHER_PROFILE_ERROR;
  constructor(public payload : any) {
  }
}
export type OtherProfilesAction =
              GetOtherProfileAction | GetOtherProfileActionError | GetOtherProfileActionSuccess;
