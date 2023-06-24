import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
constructor(private router : Router) {
}
  onMessage() {
    this.router.navigateByUrl("/message")
  }
}
