import {Component, Input, OnInit} from '@angular/core';
import {Address, User} from "../../../model/user.model";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-profile-user-info',
  templateUrl: './profile-user-info.component.html',
  styleUrls: ['./profile-user-info.component.css']
})
export class ProfileUserInfoComponent implements OnInit{
  @Input() user! : User;
  userAddress! : Address;
  userImageUrl! : string;
  constructor(private userService : UserService) {
  }
  ngOnInit() {
    this.userImageUrl=this.userService.getUserImageUrl(this.user.userId);
    this.userService.getUserAddress(this.user.userId).subscribe({
      next : data => this.userAddress = data
    })
  }

}
