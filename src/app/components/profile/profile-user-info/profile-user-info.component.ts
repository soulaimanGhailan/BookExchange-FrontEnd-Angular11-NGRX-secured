import {Component, Input, OnInit} from '@angular/core';
import {Address, User} from "../../../model/user.model";
import {UserService} from "../../../services/user.service";
import {SecurityService} from "../../../security/security.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {UpdateProfileAction} from "../../../ngrx/UsersProfileState/UsersProfile.action";
import {UpdateUserFieldType} from "../../../model/payload.model";

@Component({
  selector: 'app-profile-user-info',
  templateUrl: './profile-user-info.component.html',
  styleUrls: ['./profile-user-info.component.css']
})
export class ProfileUserInfoComponent implements OnInit{
  @Input() user! : User;
  userAddress! : Address;
  phoneNum: boolean = false;
  city: boolean = false;
  homeAddress: boolean =false;
  country: boolean=false;
  profilePic:boolean = false;
  modifyImageGroup! : FormGroup;
  submitted: boolean = false;
  isOwnerProfile!:boolean  ;
  public updateUserFieldType = UpdateUserFieldType ;
  constructor(private userService : UserService , public securityService : SecurityService ,
              private router : Router , private fb : FormBuilder ,
              private store : Store<any>) {
  }
  ngOnInit() {
    this.userService.getUserAddress(this.user.userId).subscribe({
      next : data => this.userAddress = data
    })
    this.isOwnerProfile = (this.user.userId == this.securityService.profile.id) ;
  }

  addBook() {
      this.router.navigateByUrl("/addBook")
  }

  editProfile() {

  }

  onCity() {
    this.city=!this.city;
  }

  onCountry() {
    this.country=!this.country;
  }

  onHomeAddress() {
    this.homeAddress=!this.homeAddress;
  }

  onPhoneNum() {
    this.phoneNum=!this.phoneNum;
  }

  modifyProfilePicInit() {
    this.profilePic = !this.profilePic ;
    if(this.profilePic){
      this.modifyImageGroup = this.fb.group({
        profilePicture :[null , Validators.required]
      })
    }
  }
  modifyProfilePic() {
      this.submitted =true ;
      if(this.modifyImageGroup.invalid) return ;
      this.store.dispatch(new UpdateProfileAction(
        {data : this.modifyImageGroup.get('profilePicture')?.value ,
                updateUserFieldType:UpdateUserFieldType.UpdatePICTURE , userId: this.securityService.profile.id} ));

  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader: FileReader = new FileReader();
    reader.onloadend = () => {
      const base64String: string = reader.result as string;
      this.modifyImageGroup.patchValue({
        profilePicture: base64String
      });
    };
    reader.readAsDataURL(file);
  }


}
