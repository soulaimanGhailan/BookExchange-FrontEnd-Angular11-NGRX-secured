import { NgModule } from '@angular/core';
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
import {ReactiveFormsModule} from "@angular/forms";
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
import {postReducer} from "./ngrx/singlePostState/post.reducer";
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

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        StoreModule.forRoot({
            booksBlog: booksBlogReducer, singlePostBook: postReducer, CommentsPost: CommentsReducer,
            UsersProfile: userProfileReducer
        }),
        EffectsModule.forRoot([BooksBlogEffect, CommentEffect, UsersProfilesEffect]),
        StoreDevtoolsModule.instrument(),
        BrowserAnimationsModule,
        MatPaginatorModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
