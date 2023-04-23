import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../../model/book.model";
import {BookService} from "../../../services/book.service";

@Component({
  selector: 'app-profile-books-list',
  templateUrl: './profile-books-list.component.html',
  styleUrls: ['./profile-books-list.component.css']
})
export class ProfileBooksListComponent implements OnInit{
  @Input() book! : Book;
  bookImageUrl! : string;
  constructor(private bookService : BookService) {
  }
  ngOnInit() {
    this.bookImageUrl =  this.bookService.getBookImageUrl(this.book.bookId);
  }

}
