import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatHeadService } from '../_services/chat-head.service';
import { ChatServiceService } from '../_services/chat-service.service';


@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.css']
})
export class ChatMainComponent implements OnInit {

  model: any = {};
  loginUrl: string;
  userNickname = this.chatHeadService.nickname;

  constructor(
    private router: Router,
    private chatHeadService: ChatHeadService,
    private chatServiceService: ChatServiceService,
  ) {
  }

  ngOnInit() {
    this.loginUrl = '/login';
  }

  send() {

    if (this.model.message) {

      this.chatServiceService.send({ "c":"SENDMESSAGE", "d": {"n": this.model.message }});
      this.model.message = '';
    }
  }

  disconnect() {
      
    this.chatServiceService.send({ "c":"DISCONNECT", "d": {"n": "" }});
    this.router.navigate([this.loginUrl]);
  }
}
