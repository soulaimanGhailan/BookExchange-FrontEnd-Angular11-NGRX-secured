import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {SecurityService} from "../../../../security/security.service";
import {UpdateProfileAction} from "../../../../ngrx/UsersProfileState/UsersProfile.action";
import {UpdateUserFieldType} from "../../../../model/payload.model";

@Component({
  selector: 'app-user-info-edit-from',
  templateUrl: './user-info-edit-from.component.html',
  styleUrls: ['./user-info-edit-from.component.css']
})
export class UserInfoEditFromComponent implements OnInit{
  editFormGroup!: FormGroup;
  @Input() initialValue! : string;
  @Input() updateFieldType! : UpdateUserFieldType ;
  submitted : boolean  =false ;
  constructor(private fb : FormBuilder , private store : Store<any> , private securityService:SecurityService) {
  }
  ngOnInit() {
    this.editFormGroup = this.fb.group({
      inputValue:[this.initialValue , Validators.required]
    })
  }

  modifyUserInfo() {
    this.submitted = true ;
    if(this.editFormGroup.invalid) return ;
    this.store.dispatch(new UpdateProfileAction(
      {updateUserFieldType:this.updateFieldType ,
              userId : this.securityService.profile.id  ,
              data:this.editFormGroup.get('inputValue')?.value}))
  }
}
