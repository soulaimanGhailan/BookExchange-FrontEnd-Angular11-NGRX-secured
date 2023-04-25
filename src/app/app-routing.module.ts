import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogComponent} from "./components/blog/blog.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {SinglePostComponent} from "./components/single-post/single-post.component";
import {HomeComponent} from "./components/home/home.component";
import {SingleOwnedBookComponent} from "./components/profile/single-owned-book/single-owned-book.component";

const routes: Routes = [
  {path : "blog" , component:BlogComponent},
  {path : "profile" , component:ProfileComponent},
  {path : "singlePost" , component:SinglePostComponent},
  {path : "home" , component:HomeComponent},
  {path : "singleBook" , component:SingleOwnedBookComponent},
  {path : "" , component:BlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
