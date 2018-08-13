import { Injectable } from '@angular/core';
import { Message } from '../_model/chat-model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  fied: Message[] = [];

  constructor() { }
}
