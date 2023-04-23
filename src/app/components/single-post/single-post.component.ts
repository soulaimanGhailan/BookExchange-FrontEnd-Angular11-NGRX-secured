import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {BookService} from "../../services/book.service";
import {PostState} from "../../ngrx/singlePostState/post.reducer";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit{
  post$ : Observable<PostState> |null = null;
  constructor(private store :Store<any> , private bookService : BookService) {
  }
  ngOnInit() {
    this.post$ = this.store.pipe(
      map(state => state.singlePostBook)
    )

  }

}
