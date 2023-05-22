import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../../model/book.model";
import {BookService} from "../../../services/book.service";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {SecurityService} from "../../../security/security.service";
import {GetBooksOfUserAction} from "../../../ngrx/booksBlogState/book.action";
import {SIZE_OWNED_BOOKS_PAGING} from "../../../model/user.model";
import {EditBookAction, GetSingleBookAction} from "../../../ngrx/singleBookState/SingleBook.action";

@Component({
  selector: 'app-profile-books-list',
  templateUrl: './profile-books-list.component.html',
  styleUrls: ['./profile-books-list.component.css']
})
export class ProfileBooksListComponent implements OnInit{
  @Input() book! : Book;
  constructor(public bookService : BookService , private store : Store<any> ,
              private router : Router , public securityService : SecurityService) {
  }
  ngOnInit() {


  }

  goToBook() {
      this.store.dispatch(new GetSingleBookAction(this.book));
      this.router.navigateByUrl("/singleBook");
  }

  deleteBook(event: Event) {
    event.stopPropagation();
    let conf = confirm("are sure you want to delete this book {" +this.book.bookTitle +"}");
    if(conf){
      this.bookService.deleteBook(this.book.bookId).subscribe({
        next :    data => this.store.dispatch(new GetBooksOfUserAction({data:this.book.owner.userId , pageSize:{page:0 , size:SIZE_OWNED_BOOKS_PAGING}}))

      })
    }

  }

  editBook(event: Event) {
    event.stopPropagation();
    this.store.dispatch(new EditBookAction(this.book));
    this.router.navigateByUrl("/editBook")
  }
}
