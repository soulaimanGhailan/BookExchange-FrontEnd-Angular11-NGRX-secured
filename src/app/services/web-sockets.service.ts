import { Injectable } from '@angular/core';
import {Client, IMessage} from "@stomp/stompjs";
import {Observable} from "rxjs";
import {StompService} from "@stomp/ng2-stompjs";
import {Message} from "../model/Message.model";

@Injectable({
  providedIn: 'root'
})
export class WebSocketsService {

  private stompClient!: Client;
  constructor(private stompService: StompService) { }



  connect(): Observable<IMessage> {
    return this.stompService.subscribe('/topic/messages');
  }

  disconnect(): void {
    this.stompService.disconnect();
  }

  sendMessage(message: Message): void {
    this.stompClient.publish({
      destination: '/app/chat',
      body: JSON.stringify(message)
    });
  }
}
