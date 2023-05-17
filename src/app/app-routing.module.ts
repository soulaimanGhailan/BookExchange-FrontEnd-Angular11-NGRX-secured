import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogComponent} from "./components/blog/blog.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {SinglePostComponent} from "./components/single-post/single-post.component";
import {HomeComponent} from "./components/home/home.component";
import {SingleOwnedBookComponent} from "./components/profile/single-owned-book/single-owned-book.component";
import {AuthGuard} from "./security/guards/security.guard";

const routes: Routes = [
  {path : "blog" , component:BlogComponent  , canActivate:[AuthGuard]  , data : {roles : ['USER']} ,
    children : [
      {path : "singlePost" , component:SinglePostComponent},
    ]},

  {path : "profile" , component:ProfileComponent,  canActivate:[AuthGuard]  , data : {roles : ['USER']} ,
    children : [
      {path : "singleBook" , component:SingleOwnedBookComponent},

    ]},

  {path : "home" , component:HomeComponent},

  {path : "" , component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
