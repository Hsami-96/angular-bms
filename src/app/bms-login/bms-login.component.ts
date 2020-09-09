import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication/authentication.service';

@Component({
  selector: 'bms-login',
  templateUrl: './bms-login.component.html',
  styleUrls: ['./bms-login.component.css']
})
export class BmsLoginComponent implements OnInit {
  showUserCreatedMessage: boolean;
  authError: any;
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authService.eventAuthError$.subscribe(data => {
      this.authError = data;
    });
  }

  async loginViaEmailPwd() {
  }
  
  async loginViaGoogle() {
    await this.authService.googleAuthLogin();
    if (this.authService.isLoggedIn){
      this.router.navigateByUrl('/dashboard');
    }

  }
}
