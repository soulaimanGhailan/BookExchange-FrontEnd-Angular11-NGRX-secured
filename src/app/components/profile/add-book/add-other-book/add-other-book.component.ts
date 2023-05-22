import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {BooksStateEnum, BookState} from "../../../../ngrx/booksBlogState/book.reducer";
import {map, Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {BookService} from "../../../../services/book.service";
import {SecurityService} from "../../../../security/security.service";
import {Book} from "../../../../model/book.model";

@Component({
  selector: 'app-add-other-book',
  templateUrl: './add-other-book.component.html',
  styleUrls: ['./add-other-book.component.css']
})
export class AddOtherBookComponent implements OnInit{
  bookState$ : Observable<BookState>|null=null;
  bookEnum  = BooksStateEnum ;
  constructor(private store : Store<any> ,
              private router : Router ,
              public bookService: BookService ,
              private secService : SecurityService) {
  }
  ngOnInit() {
    this.bookState$ = this.store.pipe(
      map(state => state.booksBlog)
    );
  }

  otherBook() {
      this.router.navigateByUrl("/addBook")
  }

  profile() {
    if(this.secService.profile.id)
       this.bookService.goToOwnerProfile(0 ,this.secService.profile.id)
  }


}
