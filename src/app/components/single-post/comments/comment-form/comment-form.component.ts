import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommentsService} from "../../../../services/comments.service";
import {SecurityService} from "../../../../security/security.service";
import {Book} from "../../../../model/book.model";
import {Store} from "@ngrx/store";
import {GetCommentAction, INITCommentAction} from "../../../../ngrx/commentsState/comment.action";

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit{
  commentFromGroup!:FormGroup ;
  submitted: boolean = false;
  @Input() bookId! : number;
  constructor(private fb : FormBuilder , private commentService : CommentsService ,
              public securityService: SecurityService , private store : Store) {
  }
  ngOnInit() {
    this.commentFromGroup = this.fb.group({
      comment : ["" , Validators.required]
    });
  }

  comment() {
    this.submitted = true ;
    if(this.commentFromGroup.invalid) return ;
   if(this.securityService.profile.id){
     this.commentService.comment(this.commentFromGroup.get("comment")?.value ,
       this.securityService.profile.id , this.bookId).subscribe({
       next : data => this.store.dispatch(new INITCommentAction({data : this.bookId , pageSize:{page:0 , size:5}}))
     })
   }
  }
}
