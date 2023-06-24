import {Component, OnInit} from '@angular/core';
import {User} from "../../../../model/user.model";
import {Store} from "@ngrx/store";
import {UsersProfileState} from "../../../../ngrx/UsersProfileState/UsersProfile.reducers";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.css']
})
export class SingleContactComponent implements OnInit{
  profileState : Observable<UsersProfileState>|null=null;
  contact!: User;
  constructor(private store : Store<any>) {
  }
  ngOnInit() {
    this.profileState = this.store.pipe(
      map(state => state.UsersProfile)
    );
  }

  goToContact() {

  }
}
