import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {SecurityService} from "../../../security/security.service";
import {BookService} from "../../../services/book.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  constructor(private store : Store<any> , private router : Router  ,
              public securityService:SecurityService , public bookService : BookService) {
  }
  ngOnInit() {
  }

  onBlog() {
    this.router.navigateByUrl("/blog");
  }

  onProfile() {
    if(this.securityService.profile){
      console.log("ok")
        if(this.securityService.profile.id){
        this.bookService.goToOwnerProfile(0 , this.securityService.profile.id)
        }
    }
  }

  onHome() {
    this.router.navigateByUrl("/home");
  }

  onSinglePost() {
    this.router.navigateByUrl("/singlePost")
  }

  async login() {
    await this.securityService.kcService.login({
      redirectUri :window.location.origin
    })
  }

  logout() {
      this.securityService.kcService.logout(window.location.origin);
  }
}
