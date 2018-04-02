import {BrowserModule} from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ChatComponent} from './chat/chat.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {StompConfig, StompService} from '@stomp/ng2-stompjs';
import * as SockJS from 'sockjs-client';

export function socketProvider() {
  return new SockJS('http://localhost:8080/ws');
}

const stompConfig: StompConfig = {
  // Which server?
  url: socketProvider,

  // Headers
  // Typical keys: login, passcode, host
  headers: {
    login: 'guest',
    passcode: 'guest'
  },

  // How often to heartbeat?
  // Interval in milliseconds, set to 0 to disable
  heartbeat_in: 0, // Typical value 0 - disabled
  heartbeat_out: 20000, // Typical value 20000 - every 20 seconds
  // Wait in milliseconds before attempting auto reconnect
  // Set to 0 to disable
  // Typical value 5000 (5 seconds)
  reconnect_delay: 5000,

  // Will log diagnostics on console
  debug: true
};

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StompService, {
    provide: StompConfig,
    useValue: stompConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
