import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  constructor(private store : Store<any> , private router : Router) {
  }
  ngOnInit() {
  }

  onBlog() {
    this.router.navigateByUrl("/blog");
  }

  onProfile() {
    this.router.navigateByUrl("/profile");
  }

  onHome() {
    this.router.navigateByUrl("/home");
  }

  onSinglePost() {
    this.router.navigateByUrl("/singlePost")
  }
}
