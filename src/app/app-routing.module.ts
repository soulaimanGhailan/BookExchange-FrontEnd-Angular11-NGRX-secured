import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogComponent} from "./components/blog/blog.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {SinglePostComponent} from "./components/single-post/single-post.component";
import {HomeComponent} from "./components/home/home.component";
import {SingleOwnedBookComponent} from "./components/profile/single-owned-book/single-owned-book.component";
import {AuthGuard} from "./security/guards/security.guard";
import {AddBookComponent} from "./components/profile/add-book/add-book.component";
import {AddOtherBookComponent} from "./components/profile/add-book/add-other-book/add-other-book.component";
import {EditBookComponent} from "./components/profile/edit-book/edit-book.component";

const routes: Routes = [
  {path : "blog" , component:BlogComponent  , canActivate:[AuthGuard]  , data : {roles : ['USER']} },

  {path : "profile" , component:ProfileComponent,  canActivate:[AuthGuard]  , data : {roles : ['USER']} },
  {path : "singlePost" , component:SinglePostComponent , canActivate:[AuthGuard]  , data : {roles : ['USER']}},
  {path : "singleBook" , component:SingleOwnedBookComponent , canActivate:[AuthGuard]  , data : {roles : ['USER']}},
  {path : "addBook" , component:AddBookComponent , canActivate:[AuthGuard]  , data : {roles : ['USER']}} ,
  {path : "otherBook" , component:AddOtherBookComponent, canActivate:[AuthGuard]  , data : {roles : ['USER']}},
  {path : "editBook" , component:EditBookComponent, canActivate:[AuthGuard]  , data : {roles : ['USER']}},
  {path : "home" , component:HomeComponent},
  {path : "" , component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
