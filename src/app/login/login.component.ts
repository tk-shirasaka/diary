import { Component, OnInit } from '@angular/core';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  password: string;

  constructor(private login: LoginService) { }

  ngOnInit() {
  }

  save() {
    this.login.login(this.password).subscribe();
  }
}
