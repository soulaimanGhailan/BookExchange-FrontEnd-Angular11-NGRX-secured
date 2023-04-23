import {Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "../model/book.model";
import {HttpClient} from "@angular/common/http";
import {PageInfo, PageSize} from "../model/pageInfo.model";

import {Comment, CommentReply} from "../model/Comment.mode";
import {ActionPayload} from "../model/payload.model";

@Injectable({
  providedIn: 'root'
})
export class CommentsService implements OnInit{
    host:string = "http://localhost:8085/comment";

  constructor(private http : HttpClient) { }
  ngOnInit() {
  }
  public getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.host + "?page=0&size=2");
  }


  public getAllCommentPage(pageSize : PageSize): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.host + "?page=" + pageSize.page + "&size=" + pageSize.size);
  }
  public getCommentsOfBook(actionPayload : any): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.host + "/"+ actionPayload.data + "?page=" + actionPayload.pageSize.page + "&size=" + actionPayload.pageSize.size);
  }
  public getRegularComments(actionPayload : any): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.host + "/"+ actionPayload.data + "/regularComments"+ "?page=" + actionPayload.pageSize.page + "&size=" + actionPayload.pageSize.size);
  }
  public getRepliesOfComment(actionPayload : ActionPayload<number>):Observable<Comment[]>{
    return this.http.get<Comment[]>(this.host + "/"+ actionPayload.data + "/replies"+ "?page=" + actionPayload.pageSize.page + "&size=" + actionPayload.pageSize.size);
  }

  public getPageInfoOfComment(size : number , bookId : number):Observable<PageInfo> {
    return this.http.get<PageInfo>(this.host + "/"+bookId +"/pageInfo?size=" + size);
  }

  public getPageInfoOfReplies(size : number , commentId : number):Observable<PageInfo> {
    return this.http.get<PageInfo>(this.host + "/"+commentId +"/replies/pageInfo?size=" + size);
  }

  // public getRepliesOfComment(commentId : number , pageSize :PageSize): Observable<Comment[]>{
  //   return this.http.get<Comment[]>(this.host + "/"+commentId +"/replies?page=" + pageSize.page + "&size=" + pageSize.size);
  // }

  hasReplies(commentId : number):Observable<boolean> {
    return this.http.get<boolean>(this.host + "/"+commentId +"/hasReplies");
  }
}
