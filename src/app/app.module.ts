import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChatMainComponent } from './chat-main/chat-main.component';
import { WarningComponent } from './warning/warning.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatMainComponent,
    WarningComponent,
    ChatMessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
