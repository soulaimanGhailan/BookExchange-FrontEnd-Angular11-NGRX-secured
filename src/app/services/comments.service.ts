import {Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "../model/book.model";
import {HttpClient} from "@angular/common/http";
import {PageInfo, PageSize} from "../model/pageInfo.model";

import {Comment, CommentReply} from "../model/Comment.mode";
import {ActionPayload} from "../model/payload.model";
import {host} from "../envirements/common.fields";

@Injectable({
  providedIn: 'root'
})
export class CommentsService implements OnInit{


  constructor(private http : HttpClient) { }
  ngOnInit() {
  }
  public getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(host.commentsHost + "?page=0&size=2");
  }


  public getAllCommentPage(pageSize : PageSize): Observable<Comment[]> {
    return this.http.get<Comment[]>(host.commentsHost + "?page=" + pageSize.page + "&size=" + pageSize.size);
  }
  public getCommentsOfBook(actionPayload : any): Observable<Comment[]> {
    return this.http.get<Comment[]>(host.commentsHost + "/"+ actionPayload.data + "?page=" + actionPayload.pageSize.page + "&size=" + actionPayload.pageSize.size);
  }
  public getRegularComments(actionPayload : any): Observable<Comment[]> {
    return this.http.get<Comment[]>(host.commentsHost  + "/"+ actionPayload.data + "/regularComments"+ "?page=" + actionPayload.pageSize.page + "&size=" + actionPayload.pageSize.size);
  }
  public getRepliesOfComment(actionPayload : ActionPayload<number>):Observable<Comment[]>{
    return this.http.get<Comment[]>(host.commentsHost  + "/"+ actionPayload.data + "/replies"+ "?page=" + actionPayload.pageSize.page + "&size=" + actionPayload.pageSize.size);
  }

  public getPageInfoOfComment(size : number , bookId : number):Observable<PageInfo> {
    return this.http.get<PageInfo>(host.commentsHost  + "/"+bookId +"/pageInfo?size=" + size);
  }

  public getPageInfoOfReplies(size : number , commentId : number):Observable<PageInfo> {
    return this.http.get<PageInfo>(host.commentsHost  + "/"+commentId +"/replies/pageInfo?size=" + size);
  }

  // public getRepliesOfComment(commentId : number , pageSize :PageSize): Observable<Comment[]>{
  //   return this.http.get<Comment[]>(this.host + "/"+commentId +"/replies?page=" + pageSize.page + "&size=" + pageSize.size);
  // }

  hasReplies(commentId : number):Observable<boolean> {
    return this.http.get<boolean>(host.commentsHost  + "/"+commentId +"/hasReplies");
  }

  comment(comment:string , userId : string , bookId : number):Observable<Comment>{
    return this.http.post<Comment>(host.commentsHost   + "/" +userId +"/" +bookId , comment) ;
  }
}
