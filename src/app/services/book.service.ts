import {EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book, CreatedBook} from "../model/book.model";
import {SIZE_OWNED_BOOKS_PAGING, User} from "../model/user.model";
import {PageInfo, PageSize} from "../model/pageInfo.model";
import {ActionPayload, SearchType} from "../model/payload.model";
import {Observable} from "rxjs";
import {GetBooksOfUserAction} from "../ngrx/booksBlogState/book.action";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {GetProfileAction} from "../ngrx/UsersProfileState/UsersProfile.action";
import {GetSingleBookAction} from "../ngrx/singleBookState/SingleBook.action";


@Injectable({
  providedIn: 'root'
})
export class BookService implements OnInit {
  host: string = 'http://localhost:8085/book';
  constructor(private http: HttpClient ,
              private store : Store ,private router : Router) {
  }

  ngOnInit() {
  }

  public getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.host + "?page=0&size=2");
  }

  public getAllBooksPage(pageSize : PageSize): Observable<Book[]> {
    return this.http.get<Book[]>(this.host + "?page=" + pageSize.page + "&size=" + pageSize.size);
  }

  public getBookOwner(bookId: number): Observable<User> {
    return this.http.get<User>(this.host + "/" + bookId + "/owner");
  }


  public getBookImageUrl(bookId : number) : Observable<string>{
    return this.http.get(this.host + "/"+bookId+"/image" , { responseType: 'text' })
  }

  public getPageInfo(size : number , keyword : string ="" ,searchType : SearchType = SearchType.ALL):Observable<PageInfo> {
    if(searchType == SearchType.KEYWORD)
      return this.http.get<PageInfo>(this.host + "/" + "pageInfo/" +keyword+"?size=" + size);
    if(searchType== SearchType.CATEGORY)
      return this.http.get<PageInfo>(this.host + "/" + "pageInfo/category/" +keyword+"?size=" + size);

    return this.http.get<PageInfo>(this.host + "/" + "pageInfo?size=" + size);

  }
//{keyword , size }
  public searchBookKeyword(payload :ActionPayload<string>):Observable<Book[]>{
    return this.http.get<Book[]>(this.host +  "/keyword/" + payload.data + "?size=" +payload.pageSize.size + "&page=" + payload.pageSize.page);
  }

  public searchBookByCategory(payload :ActionPayload<string>):Observable<Book[]>{
    return this.http.get<Book[]>(this.host +  "/category/" + payload.data + "?size=" +payload.pageSize.size + "&page=" + payload.pageSize.page);
  }
  public getBooksOfUser(payload :ActionPayload<number>):Observable<Book[]>{
    return this.http.get<Book[]>(this.host +  "/user/" + payload.data + "?size=" +payload.pageSize.size + "&page=" + payload.pageSize.page);
  }


  public getPageInfoOfUserBooks(size : number, userId : string):Observable<PageInfo> {
    return this.http.get<PageInfo>(this.host + "/" + "pageInfo/user/" +userId+"?size=" + size);
  }


  public goToOwnerProfile(page : number , userId:string) {
    this.store.dispatch(new GetProfileAction(userId));
    this.store.dispatch(new GetBooksOfUserAction({data:userId , pageSize:{page:page , size:SIZE_OWNED_BOOKS_PAGING}}));
    this.router.navigateByUrl("/profile");
  }


  public getDate(book : Book){
    return book.addingDate.slice(0 ,10);
  }

  public getHour(book : Book) {
    return book.addingDate.slice(11 ,16)
  }


  public addBookToUser(userId : string  , book : CreatedBook ):Observable<Book>{
    book = {...book , bookCategory:book.bookCategory?.toUpperCase()}
    return this.http.post<Book>(this.host +"/"+ userId  , book);
  }

  goToPost(book :Book) {
    this.store.dispatch(new GetSingleBookAction(book));
    this.router.navigateByUrl("/singlePost");
  }

  public deleteBook(bookId :number):Observable<Book>{
    return this.http.delete<Book>(this.host +"/"+bookId);

  }
  public editBook(book : Book):Observable<Book>{
    console.log(book)
    return this.http.put<Book>(this.host , book);
  }


}



