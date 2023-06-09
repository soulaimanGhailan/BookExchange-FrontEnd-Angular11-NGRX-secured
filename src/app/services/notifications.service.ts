import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService implements OnInit{

  constructor(private http : HttpClient) { }
  ngOnInit() {
  }

}
