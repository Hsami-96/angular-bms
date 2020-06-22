import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/authentication-service.service';

@Component({
  selector: 'bms-login',
  templateUrl: './bms-login.component.html',
  styleUrls: ['./bms-login.component.css']
})
export class BmsLoginComponent implements OnInit {

  constructor(private _googleAuth: AuthenticationService) { }

  ngOnInit() {
  }

  async loginViaGoogle() {
    this._googleAuth.googleAuth();
  }
}
