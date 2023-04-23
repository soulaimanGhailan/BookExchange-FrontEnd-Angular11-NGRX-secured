import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Address, User} from "../model/user.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
   host  : string = 'http://localhost:8085/user';
  constructor(private http : HttpClient) { }

  public getUserImageUrl(userId: string) {
    return this.host + "/"+userId+"/image";
  }
  public getOtherUser(userId : string) : Observable<User>{
    return this.http.get<User>(this.host + "/" +userId);
  }
  public getUserAddress(userId : string) : Observable<Address>{
    return this.http.get<Address>(this.host + "/" +userId + "/address");
  }

}
