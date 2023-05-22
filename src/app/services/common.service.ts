import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  Categories! : string[]
  constructor(fg : FormGroup) { }

}
