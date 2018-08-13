import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { ChatMainComponent } from '../chat-main/chat-main.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  {
    path: '',
    component: ChatMainComponent,
 }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
