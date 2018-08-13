import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Action } from '../_model/event-model';
import { Message } from '../_model/chat-model';
import { ChatHeadService } from './chat-head.service';
import { MessageService } from './message.service';
import { WarningService } from './warning.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as WebSocketClient from 'websocket';

const SERVER_URL = 'ws://localhost:2222/';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  private client;
  private returnUrl: string;
  private loginUrl: string;
  messages: Message[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private chatHeadService: ChatHeadService,
    private warningService: WarningService
  ){
  }

  initSocket(): void {

    let that = this;

    this.client = new WebSocketClient.w3cwebsocket(SERVER_URL);

    setTimeout(function(){

      if (that.client.readyState !== that.client.OPEN) {
        that.warningService.warningMessage = 'Server unavailable';
      }
      else {
        that.onMessage();
      }
    }, 1000);
  }

  send(message): void {

    if (this.client.readyState === this.client.CLOSED) {

      this.client = new WebSocketClient.w3cwebsocket(SERVER_URL);

      let client = this.client;
      let that = this;

      setTimeout(function(){

        if (client.readyState !== client.OPEN) {
          that.warningService.warningMessage = 'Server unavailable';
        }
        else {

          that.onMessage();
          client.send(JSON.stringify(message));
        }
      }, 1000);
    }
    else {
        this.client.send(JSON.stringify(message));
    }

    this.client.onerror = function(error) {

      console.log('Connect Error: ' + error.toString());
      this.warningService.warningMessage = 'Server unavailable';
    };

    this.client.onclose = function() {

      console.log('client disconnected from server');
      window.location.replace('/login');
    };
  }

  onMessage(): void {

    let that = this;

    this.client.onmessage = function(e) {

        let resp;

        if (typeof e.data === 'string') {
            resp = JSON.parse(e.data);
        }

        if (resp) {

          if (resp.event === Action[4] || resp.event === Action[5]) {
            that.router.navigate(['/login']);
          }
          if (resp.event === Action[2]) {

            that.chatHeadService.nickname = resp.nickname;
            that.router.navigate(['/']);
          }
          if (resp.event === Action[6]) {

            that.messages.push(resp.msg);
            that.messageService.fied = that.messages;
          }
          if (resp.event === Action[7]) {
            that.warningService.warningMessage = resp.msg;
          }
        }
      };
  }

  disconnect(): void {
    this.client.close();
  }
}
