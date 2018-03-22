import {BrowserModule} from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ChatComponent} from './chat/chat.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {ChatService} from "./chat.service";
import { SocketIoModule, SocketIoConfig,Socket } from 'ng-socket-io';

const config: SocketIoConfig = { url: '/websocket-example', options: {} };


const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'chat', component: ChatComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
