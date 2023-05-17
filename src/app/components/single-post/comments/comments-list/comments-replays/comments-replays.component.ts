import {Component, Input, OnInit} from '@angular/core';
import {compose, Store} from "@ngrx/store";
import {Comment} from "../../../../../model/Comment.mode";
import {UserService} from "../../../../../services/user.service";
import {CommentsService} from "../../../../../services/comments.service";
import {GetRepliesAction} from "../../../../../ngrx/commentsState/comment.action";
import {BookService} from "../../../../../services/book.service";

@Component({
  selector: 'app-comments-replays',
  templateUrl: './comments-replays.component.html',
  styleUrls: ['./comments-replays.component.css']
})
export class CommentsReplaysComponent implements OnInit{
  @Input() commentReply! : Comment;
  @Input() commentId! : number;
  @Input() initReply : boolean =false;
  userImageSrc! :string ;
  constructor(private store :Store , private userService : UserService , private bookService : BookService) {
  }
  ngOnInit() {
    if(this.commentReply){
      this.userService.getUserImageUrl(this.commentReply.owner.userId).subscribe({
        next : data => this.userImageSrc ='data:image/jpeg;base64,' +data
      });
    }
    if(this.initReply){
      this.store.dispatch(new GetRepliesAction({data:this.commentId , pageSize:{page:0 , size:1}}));
    }
  }
  public getDate(){
    return this.commentReply.commentDate.slice(0 ,10);
  }

  public getHour() {
    return this.commentReply.commentDate.slice(11 ,16)
  }


  goToOwnerProfile() {
      this.bookService.goToOwnerProfile(0 , this.commentReply.owner.userId);
  }

}
