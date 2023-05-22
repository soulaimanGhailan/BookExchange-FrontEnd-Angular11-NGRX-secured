import {Component, Input, OnInit} from '@angular/core';
import {Address, User} from "../../../model/user.model";
import {UserService} from "../../../services/user.service";
import {SecurityService} from "../../../security/security.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-user-info',
  templateUrl: './profile-user-info.component.html',
  styleUrls: ['./profile-user-info.component.css']
})
export class ProfileUserInfoComponent implements OnInit{
  @Input() user! : User;
  userAddress! : Address;
  constructor(private userService : UserService , public securityService : SecurityService , private router : Router) {
  }
  ngOnInit() {

    this.userService.getUserAddress(this.user.userId).subscribe({
      next : data => this.userAddress = data
    })
  }

  addBook() {
      this.router.navigateByUrl("/addBook")
  }

  editProfile() {

  }
}
