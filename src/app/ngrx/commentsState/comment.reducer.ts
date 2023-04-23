import {Comment} from "../../model/Comment.mode";
import {PageInfo} from "../../model/pageInfo.model";
import {Action} from "@ngrx/store";
import {CommentAction, CommentsActionType} from "./comment.action";

export enum CommentStateEnum {
  LOADING="Loading",
  LOADED ="Loaded",
  ERROR = "Error",
  INITIAL="Initial",
}
export interface CommentsState{
  comments : Comment[];
  errorMessage:string;
  dataState : CommentStateEnum;
  pageInfo : PageInfo;
}
const initialState : CommentsState  = {comments : [] , errorMessage:'' , dataState :CommentStateEnum.INITIAL , pageInfo :{totalPages :0 ,  totalElements:0}}
export function CommentsReducer(state : CommentsState = initialState , action : Action):CommentsState{
  switch (action.type) {
    //init comments
    case  CommentsActionType.INIT_COMMENTS_OfBook :return {...state, dataState: CommentStateEnum.LOADING } ;break;
    case  CommentsActionType.INIT_COMMENTS_OfBook_SUCCESS :
      return {...state, dataState: CommentStateEnum.LOADED, comments:(<CommentAction>action).payload.data, pageInfo: (<CommentAction>action).payload.pageInfo};break;
    case  CommentsActionType.INIT_COMMENTS_OfBook_ERROR :return {...state, dataState: CommentStateEnum.ERROR, errorMessage: (<CommentAction>action).payload}; break;


    //get comments of book
    case  CommentsActionType.GET_COMMENTS_OfBook :return {...state, dataState: CommentStateEnum.LOADING} ;break;
    case  CommentsActionType.GET_COMMENTS_OfBook_SUCCESS :
      let prevComments =state.comments;
      prevComments = prevComments.concat((<CommentAction>action).payload.data);
      return {...state, dataState: CommentStateEnum.LOADED, comments:prevComments, pageInfo: (<CommentAction>action).payload.pageInfo};break;
     case  CommentsActionType.GET_COMMENTS_OfBook_ERROR :return {...state, dataState: CommentStateEnum.ERROR, errorMessage: (<CommentAction>action).payload}; break;


    // replies of one comment
    case  CommentsActionType.GET_REPLIES_OfCOMMENT :return {...state, dataState: CommentStateEnum.LOADING} ; break;
    case  CommentsActionType.GET_REPLIES_OfCOMMENT_SUCCESS :
        const commentIndex = state.comments.findIndex(comment => comment.commentId === (<CommentAction>action).payload.commentOriginId);
        let updatedComment = {...state.comments[commentIndex], replies: (<CommentAction>action).payload.replies};
       if(state.comments[commentIndex].replies){
         // if not >  the init reply will be multiplied
         if(state.comments[commentIndex].replies.length !=1){
           const initReplies = [...state.comments[commentIndex].replies];
           updatedComment={...state.comments[commentIndex], replies: initReplies.concat((<CommentAction>action).payload.replies)}
         }
       }
        const updatedComments = [...state.comments.slice(0, commentIndex), updatedComment, ...state.comments.slice(commentIndex + 1)];
        return {...state, comments: updatedComments, dataState: CommentStateEnum.LOADED} ;break;
    case  CommentsActionType.GET_REPLIES_OfCOMMENT_ERROR :return {...state, dataState: CommentStateEnum.ERROR, errorMessage: (<CommentAction>action).payload}; break;

    //less replies
    case  CommentsActionType.LESS_REPLIES :
      const commentIndex1 = state.comments.findIndex(comment => comment.commentId === (<CommentAction>action).payload);
      const updatedComment1 = {...state.comments[commentIndex1], replies: []};
      const updatedComments1 = [...state.comments.slice(0, commentIndex1), updatedComment1, ...state.comments.slice(commentIndex1 + 1)];
      return {...state, dataState: CommentStateEnum.LOADED , comments:updatedComments1}; break;

    default : return {...state } ; break;
  }
  }
