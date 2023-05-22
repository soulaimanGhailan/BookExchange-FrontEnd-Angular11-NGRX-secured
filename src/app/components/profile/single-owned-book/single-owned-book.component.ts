import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {SingleBookState} from "../../../ngrx/singleBookState/SingleBook.reducer";
import {Store} from "@ngrx/store";
import {BookService} from "../../../services/book.service";
import {Book} from "../../../model/book.model";
import {SecurityService} from "../../../security/security.service";

@Component({
  selector: 'app-single-owned-book',
  templateUrl: './single-owned-book.component.html',
  styleUrls: ['./single-owned-book.component.css']
})
export class SingleOwnedBookComponent implements OnInit{
  ownerBook$: Observable<SingleBookState>|null=null;
  book! : Book ;
  constructor(private store : Store<any> ,
              public bookService : BookService,
              public securityService : SecurityService) {
  }
  ngOnInit() {
    this.ownerBook$ = this.store.pipe(
      map(state => state.singleBook)
    )
     this.ownerBook$?.subscribe({
       next : data => {
         // @ts-ignore
         this.book=data.book;
       }
     })
  }





}
