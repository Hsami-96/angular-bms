import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bms-login',
  templateUrl: './bms-login.component.html',
  styleUrls: ['./bms-login.component.css']
})
export class BmsLoginComponent implements OnInit {

  constructor(private _googleAuth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  async loginViaGoogle() {
    const test = await this._googleAuth.googleAuthLogin().then((result) => {
    this.router.navigateByUrl('/dashboard');
    // this.name = result.user.displayName;
    this._googleAuth.isLoggedIn = true;
    }).catch((error) => {
      this._googleAuth.isLoggedIn = false;
      console.log(error);
    });
    console.log(test);
  }
}
