import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bms-login',
  templateUrl: './bms-login.component.html',
  styleUrls: ['./bms-login.component.css']
})
export class BmsLoginComponent implements OnInit {
  showUserCreatedMessage: boolean;
  constructor(private _googleAuth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  async loginViaGoogle() {
    await this._googleAuth.googleAuthLogin();
    if (this._googleAuth.isLoggedIn){
      this.router.navigateByUrl('/dashboard');
    }

  }
}
