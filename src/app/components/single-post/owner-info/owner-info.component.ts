import {Component, Input, OnInit} from '@angular/core';
import {BookService} from "../../../services/book.service";
import {Address, User} from "../../../model/user.model";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-owner-info',
  templateUrl: './owner-info.component.html',
  styleUrls: ['./owner-info.component.css']
})
export class OwnerInfoComponent implements OnInit{
  @Input() owner! :User;
  userAddress! : Address ;
  constructor(private userService : UserService , private bookService : BookService) {
  }
  ngOnInit() {
    this.userService.getUserAddress(this.owner.userId).subscribe({
      next : data => this.userAddress = data
    })
  }

  goToOwner() {
    this.bookService.goToOwnerProfile(0 , this.owner.userId);
  }
}
