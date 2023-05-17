import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Comment} from "../../../../model/Comment.mode";
import {UserService} from "../../../../services/user.service";
import {Store} from "@ngrx/store";
import {GetRepliesAction, LessRepliesAction} from "../../../../ngrx/commentsState/comment.action";
import {CommentsService} from "../../../../services/comments.service";
import {PageInfo} from "../../../../model/pageInfo.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {BookService} from "../../../../services/book.service";

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit{
  @Input() comment! : Comment;
  userImageSrc! :string;
  replyForm! : FormGroup;
  @ViewChild('replyDiv', { static: true }) replyDiv!: ElementRef<HTMLDivElement>;
  constructor(private userService : UserService ,
              private bookService : BookService,
              private store : Store<any> ,
              private commentService : CommentsService ,
              private fb : FormBuilder) {
  }
  ngOnInit() {
    this.userService.getUserImageUrl(this.comment.owner.userId).subscribe({
      next : data => this.userImageSrc ='data:image/jpeg;base64,' +data
    });


  }

  public getDate(){
    return this.comment.commentDate.slice(0 ,10);
  }

  public getHour() {
    return this.comment.commentDate.slice(11 ,16)
  }

  goToOwnerProfile() {
    this.bookService.goToOwnerProfile(0 , this.comment.owner.userId);
  }

  moreReplies(size :number) {
    if(this.comment.replies.length < this.comment.repliesPageInfo.totalElements){
      let page = 0;
      if(this.comment.replies.length ==1){
        this.store.dispatch(new GetRepliesAction({data:this.comment.commentId , pageSize:{page:page, size:size}}));
      }else{
        if(this.comment.replies.length%size == 0)
          page = this.comment.replies.length/size;
        else{
          let i=this.comment.replies.length;
          while (++i){
            if(i%size == 0){
              page = i/size; break;
            }
          }
        }
        this.store.dispatch(new GetRepliesAction({data:this.comment.commentId , pageSize:{page:page, size:3}}));
      }
      }


  }

  lessReplies() {
    if(this.comment.replies.length != 0)
        this.store.dispatch(new LessRepliesAction(this.comment.commentId));
  }


  createReply() {
    this.replyForm = this.fb.group({
      replyContent :''
    });
    // this.replyDiv.nativeElement.scrollIntoView();
  }

}
