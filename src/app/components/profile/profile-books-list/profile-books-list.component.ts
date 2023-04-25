import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../../model/book.model";
import {BookService} from "../../../services/book.service";
import {Store} from "@ngrx/store";
import {GetPostAction} from "../../../ngrx/singlePostState/post.action";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-books-list',
  templateUrl: './profile-books-list.component.html',
  styleUrls: ['./profile-books-list.component.css']
})
export class ProfileBooksListComponent implements OnInit{
  @Input() book! : Book;
  bookImageUrl! : string;
  constructor(private bookService : BookService , private store : Store<any> , private router : Router) {
  }
  ngOnInit() {
    this.bookImageUrl =  this.bookService.getBookImageUrl(this.book.bookId);
  }

  goToBook() {
      this.store.dispatch(new GetPostAction(this.book));
      this.router.navigateByUrl("/singleBook");
  }
}
