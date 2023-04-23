import {Component, Input, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {CommentsState, CommentStateEnum} from "../../../ngrx/commentsState/comment.reducer";
import {Store} from "@ngrx/store";
import {
  GetCommentAction,
  INITCommentAction,
} from "../../../ngrx/commentsState/comment.action";
import {PageInfo} from "../../../model/pageInfo.model";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{
  Comments$ : Observable<CommentsState> | null = null;
  CommentStateEnum = CommentStateEnum;
  @Input() bookId! : number;
  // @Input() commentPageInfo! : PageInfo;
  commentsLength! : number;
  constructor(private store : Store<any>) {
  }
  ngOnInit() {
    this.Comments$=this.store.pipe(
      map(state => state.CommentsPost)
    );
    this.Comments$?.subscribe({
      next : data => this.commentsLength = data.comments.length
    })

    this.store.dispatch(new INITCommentAction({data: this.bookId, pageSize: {page: 0, size: 5}}));

  }

  moreComment(size: number) {
    // note that the case when we can't add more comment is in the html
        let page = 1;
        if (this.commentsLength % size == 0) {
          page = this.commentsLength / size
        } else {
          let i = this.commentsLength;
          while (++i) {
            if (i % size == 0) {
              page = i / size;
              break;
            }
          }
        }
        this.store.dispatch(new GetCommentAction({data: this.bookId, pageSize: {page: page, size: size}}));


  }
  lessComment() {
    this.store.dispatch(new INITCommentAction({data: this.bookId, pageSize: {page: 0, size: 5}}));
  }
}
