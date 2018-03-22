import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import { ChatService } from '../chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {



  headers = new HttpHeaders(
    {'Content-Type': 'text/plain; charset=utf-8'});

  msg : string;
  message: string;

  constructor(private http: HttpClient,
              private chatService: ChatService) {

  }

  ngOnInit(): void {
  }


  public response = (data) => {
    console.log(data)
  };

  SendMessage(form: NgForm) {
    const name = form.value.message;
    this.message = name;
    console.log(this.message)
    this.http.post('/api/send', this.message, {headers: this.headers}).subscribe(

    )

    this.chatService
      .getMessage()
      .subscribe(msg => {
        this.msg = "1st "+msg;
        console.log(this.msg);
      });
  }


}
