import {Component, OnInit} from '@angular/core';
import {SecurityService} from "../../security/security.service";
import {User} from "../../model/user.model";
import {map, Observable} from "rxjs";
import {UsersProfileState, UsersProfileStateEnum} from "../../ngrx/UsersProfileState/UsersProfile.reducers";
import {Store} from "@ngrx/store";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-online-chat',
  templateUrl: './online-chat.component.html',
  styleUrls: ['./online-chat.component.css']
})
export class OnlineChatComponent implements  OnInit{
  owner! : User ;
  messageForm ! : FormGroup ;
  constructor(public secService : SecurityService ,
              private store : Store<any> ,
              private fb:FormBuilder) {
  }
  ngOnInit() {
    this.messageForm = this.fb.group({
      message : ['' , Validators.required]
    })
  }

  goToOwnerProfile() {

  }

  sendMessage() {

  }
}
