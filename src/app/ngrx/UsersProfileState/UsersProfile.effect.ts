import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {UserService} from "../../services/user.service";
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import {
  GetOtherProfileActionError,
  GetOtherProfileActionSuccess,
  GetOtherProfileActionType,
  OtherProfilesAction
} from "./UsersProfile.action";

@Injectable()
export class UsersProfilesEffect {
  constructor(private userService: UserService, private effectActions: Actions, private store: Store) {
  }

  GetOtherProfile:Observable<OtherProfilesAction>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(GetOtherProfileActionType.GET_OTHER_PROFILE),
      mergeMap((action:OtherProfilesAction)=>{
        return this.userService.getOtherUser(action.payload)
          .pipe(
            map((user)=>  new GetOtherProfileActionSuccess({data:user , pageInfo:{totalPages:0 , totalElements:0}})),
            catchError((err)=>of(new GetOtherProfileActionError(err.message)))
          )
      })
    )
  );

}
