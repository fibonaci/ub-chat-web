import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../_services/chat-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(
    private chatServiceService: ChatServiceService,
  ) {

  }

  ngOnInit() {
  }

  login () {
    this.chatServiceService.send({ "c":"LOGIN", "d": {"n": this.model.nickname }});
    }
}
