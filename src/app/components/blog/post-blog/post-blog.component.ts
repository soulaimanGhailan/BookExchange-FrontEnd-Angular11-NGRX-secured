import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../../model/book.model";
import {BookService} from "../../../services/book.service";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {GetPostAction} from "../../../ngrx/singlePostState/post.action";

@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent implements OnInit{
  @Input() book!:Book;
  bookImageSrc!: string;
  userImageSrc!:string
  constructor(private bookService : BookService ,
              private store : Store<any>,
              private userService : UserService , private router :Router) {
  }
  ngOnInit() {
    this.userService.getUserImageUrl(this.book.owner.userId).subscribe({
      next : data => this.userImageSrc ='data:image/jpeg;base64,' +data
    });
    this.bookService.getBookImageUrl(this.book.bookId).subscribe({
      next : data =>this.bookImageSrc = 'data:image/jpeg;base64,' + data
    });

  }

  public getDate(){
    return this.book.addingDate.slice(0 ,10);
  }

  public getHour() {
    return this.book.addingDate.slice(11 ,16)
  }


  goToPost() {
    this.store.dispatch(new GetPostAction(this.book));
    this.router.navigateByUrl("/singlePost");
  }

  goToOwner() {
    this.bookService.goToOwnerProfile(0 , this.book.owner.userId);
  }
}
