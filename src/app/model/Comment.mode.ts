import {User} from "./user.model";
import {PageInfo} from "./pageInfo.model";

export interface Comment{
  commentId :number;
  commentContent :string;
  commentDate : string ;
  demo :string;
  replies:Comment[] ;
  owner : User;
  repliesPageInfo : PageInfo;
}

export interface CommentReply{
  commentId :number;
  commentContent :string;
  commentDate : string ;
  demo :string;
  owner : User;
}

