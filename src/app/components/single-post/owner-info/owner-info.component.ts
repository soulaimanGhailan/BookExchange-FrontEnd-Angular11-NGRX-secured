import {Component, Input, OnInit} from '@angular/core';
import {BookService} from "../../../services/book.service";
import {User} from "../../../model/user.model";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-owner-info',
  templateUrl: './owner-info.component.html',
  styleUrls: ['./owner-info.component.css']
})
export class OwnerInfoComponent implements OnInit{
  @Input() owner! :User;
  constructor(private userService : UserService , private bookService : BookService) {
  }
  ngOnInit() {
  }

  goToOwner() {
    this.bookService.goToOwnerProfile(0 , this.owner.userId);
  }
}
