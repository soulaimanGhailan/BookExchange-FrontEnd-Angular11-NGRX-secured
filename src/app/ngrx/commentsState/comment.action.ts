import {Action} from "@ngrx/store";
import {ActionPayload, ResultPayLoad} from "../../model/payload.model";
import {Comment } from "../../model/Comment.mode";

export enum CommentsActionType {
  //init comments
  INIT_COMMENTS_OfBook = "[COMMENT] INIT Comments page",
  INIT_COMMENTS_OfBook_SUCCESS = "[COMMENT] INIT  Comments page Success",
  INIT_COMMENTS_OfBook_ERROR = "[COMMENT] INIT  Comments page Error",


  GET_COMMENTS_OfBook = "[COMMENT] Get Comments page",
  GET_COMMENTS_OfBook_SUCCESS = "[COMMENT] Get  Comments page Success",
  GET_COMMENTS_OfBook_ERROR = "[COMMENT] Get  Comments page Error",

  //replies
  GET_REPLIES_OfCOMMENT = "[COMMENT] Get replies Comments page",
  GET_REPLIES_OfCOMMENT_SUCCESS = "[COMMENT] Get replies of Comments page Success",
  GET_REPLIES_OfCOMMENT_ERROR = "[COMMENT] Get replies Comments page Error",

  LESS_REPLIES = "[COMMENT] LESS REPLIES",




}
export class INITCommentAction implements Action{
  type :CommentsActionType = CommentsActionType.INIT_COMMENTS_OfBook;
  constructor(public payload : ActionPayload<number>) {
  }
}
export class INITCommentActionSuccess implements Action{
  type :CommentsActionType = CommentsActionType.INIT_COMMENTS_OfBook_SUCCESS;
  constructor(public payload : ResultPayLoad<Comment[]>) {
  }
}
export class INITCommentActionError implements Action{
  type :CommentsActionType = CommentsActionType.INIT_COMMENTS_OfBook_ERROR;
  constructor(public payload : any) {
  }
}


export class GetCommentAction implements Action{
  type :CommentsActionType = CommentsActionType.GET_COMMENTS_OfBook;
  constructor(public payload : ActionPayload<number>) {
  }
}
export class GetCommentActionSuccess implements Action{
  type :CommentsActionType = CommentsActionType.GET_COMMENTS_OfBook_SUCCESS;
  constructor(public payload : ResultPayLoad<Comment[]>) {
  }
}
export class GetCommentActionError implements Action{
  type :CommentsActionType = CommentsActionType.GET_COMMENTS_OfBook_ERROR;
  constructor(public payload : any) {
  }
}

//get replies of one comment by commentId
export class GetRepliesAction implements Action{
  type :CommentsActionType = CommentsActionType.GET_REPLIES_OfCOMMENT;
  constructor(public payload : ActionPayload<number>) {
  }
}
export class GetRepliesActionSuccess implements Action{
  type :CommentsActionType = CommentsActionType.GET_REPLIES_OfCOMMENT_SUCCESS;
  //ResultPayLoad contains {commentOriginId , Array<replies>}
  constructor(public payload :{commentOriginId : number , replies : Comment[]}) {
  }
}
export class GetRepliesActionError implements Action{
  type :CommentsActionType = CommentsActionType.GET_REPLIES_OfCOMMENT_ERROR;
  constructor(public payload : string) {
  }
}

export class LessRepliesAction implements Action{
  type :CommentsActionType = CommentsActionType.LESS_REPLIES;
  constructor(public payload : number) {
  }
}


export type CommentAction =
  INITCommentAction|INITCommentActionError|INITCommentActionSuccess|
  GetCommentAction | GetCommentActionError |GetCommentActionSuccess|
  GetRepliesActionError|GetRepliesActionSuccess|GetRepliesAction
  |LessRepliesAction
  ;
