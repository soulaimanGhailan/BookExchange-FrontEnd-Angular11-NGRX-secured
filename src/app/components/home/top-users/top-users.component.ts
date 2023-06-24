import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {UsersProfileState} from "../../../ngrx/UsersProfileState/UsersProfile.reducers";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-top-users',
  templateUrl: './top-users.component.html',
  styleUrls: ['./top-users.component.css']
})
export class TopUsersComponent implements OnInit{
  constructor(private store : Store<any>) {
  }
  ngOnInit(){

  }

}
