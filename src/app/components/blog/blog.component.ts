import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {map, Observable} from "rxjs";
import {BooksStateEnum, BookState, FetchState} from "../../ngrx/booksBlogState/book.reducer";
import {Store} from "@ngrx/store";
import {GetBooksPageAction, SearchBookCategoryAction, SearchBookKeywordAction} from "../../ngrx/booksBlogState/book.action";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  public BookPageList$ : Observable<BookState> | null = null;
  public BooksStateEnum = BooksStateEnum;
  currentPage: number = 0;
  size : number = 2 ;
  FetchState= FetchState;
  @ViewChild('topOfPage', { static: true }) topOfPage!: ElementRef<HTMLDivElement>;
  static index: number =0;
  constructor(private store : Store<any>) {
  }
  ngOnInit() {
    // this.topOfPage.nativeElement.scrollIntoView();
    this.BookPageList$ = this.store.pipe(
      map(state => state.booksBlog)
    );
    this.store.dispatch(new GetBooksPageAction({page : this.currentPage , size : this.size}));

  }

  onPagination($event: any) {
    this.currentPage = $event;
    this.Scroll();
  }

  Scroll() {
    this.currentPage  = 0;
    this.topOfPage.nativeElement.scrollIntoView();
  }
}
