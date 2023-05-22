import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { NavBarComponent } from './components/page-head/nav-bar/nav-bar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PageHeadComponent } from './components/page-head/page-head.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostBlogComponent } from './components/blog/post-blog/post-blog.component';
import { SearchBlogComponent } from './components/search-blog/search-blog.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {BooksBlogEffect} from "./ngrx/booksBlogState/book.effect";
import {StoreModule} from "@ngrx/store";
import {booksBlogReducer} from "./ngrx/booksBlogState/book.reducer";
import { HomeComponent } from './components/home/home.component';
import { CommentsComponent } from './components/single-post/comments/comments.component';
import { OwnerInfoComponent } from './components/single-post/owner-info/owner-info.component';
import { CommentsListComponent } from './components/single-post/comments/comments-list/comments-list.component';
import { CommentFormComponent } from './components/single-post/comments/comment-form/comment-form.component';
import {singleBookReducer} from "./ngrx/singleBookState/SingleBook.reducer";
import {CommentsReducer} from "./ngrx/commentsState/comment.reducer";
import {CommentEffect} from "./ngrx/commentsState/comment.effect";
import { CommentsReplaysComponent } from './components/single-post/comments/comments-list/comments-replays/comments-replays.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PostInfoComponent} from "./components/single-post/post-info/post-info.component";
import { ProfileBooksListComponent } from './components/profile/profile-books-list/profile-books-list.component';
import { ProfileUserInfoComponent } from './components/profile/profile-user-info/profile-user-info.component';
import {UsersProfilesEffect} from "./ngrx/UsersProfileState/UsersProfile.effect";
import {userProfileReducer} from "./ngrx/UsersProfileState/UsersProfile.reducers";
import {MatPaginatorModule} from "@angular/material/paginator";
import { PaginationComponent } from './components/blog/pagination/pagination.component';
import { SingleOwnedBookComponent } from './components/profile/single-owned-book/single-owned-book.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import { AddBookComponent } from './components/profile/add-book/add-book.component';
import {MatInputModule} from "@angular/material/input";
import { AddOtherBookComponent } from './components/profile/add-book/add-other-book/add-other-book.component';
import { EditBookComponent } from './components/profile/edit-book/edit-book.component';

export function initKeyClock(kcSecurity : KeycloakService) {
  return () =>
    kcSecurity.init({
      config: {
        url: 'http://localhost:8080/',
        realm: 'bookRealm',
        clientId: 'bookExchange'
      },
      initOptions: {
        // onLoad: 'login-required',
        onLoad: 'check-sso',
        checkLoginIframe : true
        // silentCheckSsoRedirectUri:
        //   window.location.origin
      }
    });

}

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    NavBarComponent,
    ProfileComponent,
    PageHeadComponent,
    SinglePostComponent,
    PostBlogComponent,
    SearchBlogComponent,
    PageFooterComponent,
    HomeComponent,
    CommentsComponent,
    OwnerInfoComponent,
    CommentsListComponent,
    CommentFormComponent,
    CommentsReplaysComponent,
    PostInfoComponent,
    ProfileBooksListComponent,
    ProfileUserInfoComponent,
    PaginationComponent,
    SingleOwnedBookComponent,
    AddBookComponent,
    AddOtherBookComponent,
    EditBookComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      booksBlog: booksBlogReducer, singleBook: singleBookReducer, CommentsPost: CommentsReducer,
      UsersProfile: userProfileReducer
    }),
    EffectsModule.forRoot([BooksBlogEffect, CommentEffect, UsersProfilesEffect]),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
    MatPaginatorModule,
    KeycloakAngularModule,
    MatInputModule,
    FormsModule
  ],
  providers: [{provide : APP_INITIALIZER , deps:[KeycloakService] , useFactory:initKeyClock , multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
