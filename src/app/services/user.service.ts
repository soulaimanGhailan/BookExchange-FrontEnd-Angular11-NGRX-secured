import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Address, User} from "../model/user.model";
import {HttpClient} from "@angular/common/http";
import {UpdateUserFieldType, UpdateUserPayload} from "../model/payload.model";
import {SecurityService} from "../security/security.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
   host  : string = 'http://localhost:8085/user';
  constructor(private http : HttpClient ) { }


  public getUser(userId : string) : Observable<User>{
    return this.http.get<User>(this.host + "/" +userId);
  }
  public getUserAddress(userId : string) : Observable<Address>{
    return this.http.get<Address>(this.host + "/" +userId + "/address");
  }
  public updateUserInfo(payload :UpdateUserPayload):Observable<User>{
        return this.http.put<User>(this.host +"/updateUserField" , payload)
  }

}
