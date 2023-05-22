import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../../model/book.model";
import {BookService} from "../../../services/book.service";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";


@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent implements OnInit{
  @Input() book!:Book;

  constructor(public bookService : BookService ,
              private store : Store<any>,
              private userService : UserService , private router :Router) {
  }
  ngOnInit() {
  }



  goToPost() {
    this.bookService.goToPost(this.book);
  }

  goToOwner() {
    this.bookService.goToOwnerProfile(0 , this.book.owner.userId);
  }
}
