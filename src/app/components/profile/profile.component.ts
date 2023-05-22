import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {map, Observable} from "rxjs";
import {BooksStateEnum, BookState} from "../../ngrx/booksBlogState/book.reducer";
import {UsersProfileState, UsersProfileStateEnum} from "../../ngrx/UsersProfileState/UsersProfile.reducers";
import {Address, SIZE_OWNED_BOOKS_PAGING} from "../../model/user.model";
import {UserService} from "../../services/user.service";
import {SecurityService} from "../../security/security.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  size = SIZE_OWNED_BOOKS_PAGING;
  bookState$ : Observable<BookState>|null=null;
  profileState$ : Observable<UsersProfileState>|null=null; // case of registered user profile we will user  State
  profileStateEnum = UsersProfileStateEnum;
  BookStateEnum =BooksStateEnum;
  currentPage:number = 0;
  @ViewChild('topOfPage', { static: true }) topOfPage!: ElementRef<HTMLDivElement>;
  constructor(private store : Store<any> , public securityService : SecurityService) {
  }
  ngOnInit() {
    this.bookState$ = this.store.pipe(
      map(state => state.booksBlog)
    );
    this.profileState$=this.store.pipe(
      map(state => state.UsersProfile)
    );

  }

  onPagination($event: any) {
    this.currentPage = $event;
    this.Scroll();
  }

  Scroll() {
    this.topOfPage.nativeElement.scrollIntoView();
  }
}
