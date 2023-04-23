import {Injectable} from "@angular/core";
import {CommentsService} from "../../services/comments.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, Observable, of} from "rxjs";

import {
  CommentAction,
  CommentsActionType,
  GetCommentActionError,
  GetCommentActionSuccess,
  GetRepliesActionError,
  GetRepliesActionSuccess, INITCommentActionError, INITCommentActionSuccess
} from "./comment.action";
import {Store} from "@ngrx/store";

@Injectable()
export class CommentEffect {
  constructor(private commentService : CommentsService , private effectActions : Actions , private store : Store) {
  }
  GetCommentsOfBook:Observable<CommentAction>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(CommentsActionType.GET_COMMENTS_OfBook),
      mergeMap((action : CommentAction) => {
        return this.commentService.getRegularComments(action.payload).pipe(
          mergeMap(comments => {
            return this.commentService.getPageInfoOfComment(action.payload.pageSize.size , action.payload.data).pipe(
              map(pageinfo => {
                return new GetCommentActionSuccess({data : comments , pageInfo : pageinfo});
              })
            )
          }),
          catchError(err => of(new GetCommentActionError(err.message)))
        )
      })
    )
  );

  InitCommentsOfBook:Observable<CommentAction>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(CommentsActionType.INIT_COMMENTS_OfBook),
      mergeMap((action : CommentAction) => {
        return this.commentService.getRegularComments(action.payload).pipe(
          mergeMap(comments => {
            return this.commentService.getPageInfoOfComment(action.payload.pageSize.size , action.payload.data).pipe(
              map(pageinfo => {
                return new INITCommentActionSuccess({data : comments , pageInfo : pageinfo});
              })
            )
          }),
          catchError(err => of(new INITCommentActionError(err.message)))
        )
      })
    )
  );



  getRepliesOfComment:Observable<CommentAction>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(CommentsActionType.GET_REPLIES_OfCOMMENT),
      mergeMap((action:CommentAction)=>{
        return this.commentService.getRepliesOfComment(action.payload)
          .pipe(
            map((replies)=>  new GetRepliesActionSuccess({commentOriginId : action.payload.data , replies : replies})),
            catchError((err)=>of(new GetRepliesActionError(err.message)))
          )
      })
    )
  );




}
