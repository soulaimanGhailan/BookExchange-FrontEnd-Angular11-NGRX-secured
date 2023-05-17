import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {PostState} from "../../../ngrx/singlePostState/post.reducer";
import {Store} from "@ngrx/store";
import {BookService} from "../../../services/book.service";
import {Book} from "../../../model/book.model";

@Component({
  selector: 'app-single-owned-book',
  templateUrl: './single-owned-book.component.html',
  styleUrls: ['./single-owned-book.component.css']
})
export class SingleOwnedBookComponent implements OnInit{
  ownerBook$: Observable<PostState>|null=null;
  book! : Book ;
  bookImgUrl! : string ;
  constructor(private store : Store<any> , private bookService : BookService) {
  }
  ngOnInit() {
    this.ownerBook$ = this.store.pipe(
      map(state => state.singlePostBook)
    )
     this.ownerBook$?.subscribe({
       next : data => {
           // @ts-ignore
         this.bookService.getBookImageUrl(data.book.bookId).subscribe({
           next : d => this.bookImgUrl = 'data:image/jpeg;base64,' +d
         });
         // @ts-ignore
         this.book=data.book;
       }
     })
  }

  public getDate(){
    return this.book.addingDate.slice(0 ,10);
  }

  public getHour() {
    return this.book.addingDate.slice(11 ,16)
  }


}
