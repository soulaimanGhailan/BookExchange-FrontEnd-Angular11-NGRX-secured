import {Injectable} from "@angular/core";
import {KeycloakProfile} from "keycloak-js";
import { KeycloakService} from "keycloak-angular";
import {Store} from "@ngrx/store";

@Injectable({providedIn : "root"})
export class SecurityService {
  public profile! : KeycloakProfile;
  constructor (public kcService: KeycloakService , private store : Store<any>) {
    this.init();
  }
  // it is recommended to use event here
  //kcService.keycloakEvents$.subscribe ..........
  init(){
    this.kcService.isLoggedIn().then(isLoggedIn => {
      if (isLoggedIn) {
        this.kcService.loadUserProfile().then(profile=>{
          this.profile=profile;
        });
      }});

  }
  public hasRoleIn(roles:string[]):boolean{
    let userRoles = this.kcService.getUserRoles();
    for(let role of roles){
      if (userRoles.includes(role)) return true;
    } return false;
  }

}
