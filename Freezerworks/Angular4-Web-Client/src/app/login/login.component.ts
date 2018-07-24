import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private _loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    this._loginService.authenticate(this.username, this.password)
      .subscribe(returnData => {
        if(returnData.properties.validUser === true) {
          this.router.navigate(['/home']);
        }
      },
      error => {
        console.log("error: ", error);
      })
  }

}
