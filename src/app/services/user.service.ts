import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Address, User} from "../model/user.model";
import {HttpClient} from "@angular/common/http";
import {UpdateUserPayload} from "../model/payload.model";
import {host} from "../envirements/common.fields";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http : HttpClient ) { }


  public getUser(userId : string) : Observable<User>{
    return this.http.get<User>(host.usersHost + "/" +userId);
  }
  public getUserAddress(userId : string) : Observable<Address>{
    return this.http.get<Address>(host.usersHost + "/" +userId + "/address");
  }
  public updateUserInfo(payload :UpdateUserPayload):Observable<User>{
        return this.http.put<User>(host.usersHost +"/updateUserField" , payload)
  }

}
