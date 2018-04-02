import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {StompService} from "@stomp/ng2-stompjs";
import {Message} from '@stomp/stompjs';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {


  headers = new HttpHeaders(
    {'Content-Type': 'text/plain; charset=utf-8'});

  receivedMessages: string[] = [];
  message: string;

  constructor(private http: HttpClient,
              private _stompService: StompService) {
    const stomp_subscription = this._stompService.subscribe('/chat');

    stomp_subscription.subscribe((msg: Message) => {
      this.receivedMessages.push(msg.body);
      console.log('received', this.receivedMessages);
    });
  }

  ngOnInit(): void {
  }


  public response = (data) => {
    console.log(data);
  }

  SendMessage(form: NgForm) {

    const name = form.value.message;
    this.message = name;
    console.log('send', this.message)
    this.http.post('/api/send', this.message, {headers: this.headers}).subscribe(

    );
  }


}
