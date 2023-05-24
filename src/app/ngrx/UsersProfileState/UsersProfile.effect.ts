import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {UserService} from "../../services/user.service";
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import {
  GetProfileActionError,
  GetProfileActionSuccess,
  ProfilesAction,
  ProfileActionType, UpdateProfileActionSuccess, UpdateProfileActionError
} from "./UsersProfile.action";
import {UpdateUserFieldType} from "../../model/payload.model";

@Injectable()
export class UsersProfilesEffect {
  constructor(private userService: UserService, private effectActions: Actions, private store: Store) {
  }

  GetProfile:Observable<ProfilesAction>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProfileActionType.GET_PROFILE),
      mergeMap((action:ProfilesAction)=>{
        return this.userService.getUser(action.payload)
          .pipe(
            map((user)=>  new GetProfileActionSuccess(user)),
            catchError((err)=>of(new GetProfileActionError(err.message)))
          )
      })
    )
  );

  updateProfile:Observable<ProfilesAction>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProfileActionType.UPDATE_PROFILE),
      mergeMap((action:ProfilesAction)=>{
            return this.userService.updateUserInfo(action.payload)
              .pipe(
                map((user)=>  new UpdateProfileActionSuccess(user)),
                catchError((err)=>of(new UpdateProfileActionError(err.message)))
              )
      })
    )
  );

}
