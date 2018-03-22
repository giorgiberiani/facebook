import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  headers = new HttpHeaders(
    {'Content-Type':'application/json; charset=utf-8'});

  user: string;

  constructor(private routes: Router,private http: HttpClient) { }

  ngOnInit() {
  }
  onSignup(form: NgForm) {
    const name = form.value.password;
    this.user = name;
    console.log(this.user);
      this.http.post('/api/check',this.user,{headers:this.headers}).subscribe(
      data =>{
        if(this.user != null) {
          this.routes.navigate(['/chat']);
        }

      },

    )
  }

}
