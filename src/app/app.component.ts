import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from './_services/chat-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Web chat';

  constructor(
    private chatServiceService: ChatServiceService
  ) {
    this.chatServiceService.initSocket();
  }

  ngOnInit(){
    this.chatServiceService.onMessage();
  }
}
