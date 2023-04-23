import {Component, Input, OnInit} from '@angular/core';
import {BookService} from "../../../services/book.service";
import {User} from "../../../model/user.model";
import {UserService} from "../../../services/user.service";
import {Store} from "@ngrx/store";
import {GetBooksOfUserAction} from "../../../ngrx/booksBlogState/book.action";
import {Router} from "@angular/router";

@Component({
  selector: 'app-owner-info',
  templateUrl: './owner-info.component.html',
  styleUrls: ['./owner-info.component.css']
})
export class OwnerInfoComponent implements OnInit{
  @Input() owner! :User;
  userImageSrc!:string;
  constructor(private userService : UserService , private bookService : BookService) {
  }
  ngOnInit() {
    this.userImageSrc = this.userService.getUserImageUrl(this.owner.userId);
  }

  goToOwner() {
    this.bookService.goToOwnerProfile(0 , this.owner.userId);
  }
}
