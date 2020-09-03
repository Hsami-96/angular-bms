import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/authentication-service.service';
import { User } from 'src/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'bms-bms-signup',
  templateUrl: './bms-signup.component.html',
  styleUrls: ['./bms-signup.component.css']
})
export class BmsSignupComponent implements OnInit {
  authError: any;
  user: User;
  constructor(private auth: AuthenticationService, private router: Router) {
    this.user = {
      displayName: '',
      email: '',
      password: ''
    };
   }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
    });
  }

  async registerUser(userRegDetails) {
    this.user = {email: userRegDetails.email, password: userRegDetails.password, displayName: userRegDetails.displayName};
    console.log(this.user);
    await this.auth.UPAuthRegister(this.user).then(() => {
      console.log('User created');
      this.router.navigate(['/signin', {showUserCreatedMessage: true}]);
    });
    if (this.auth.isUserCreated) {
      console.log('User created')
      this.router.navigate(['/signin', {showUserCreatedMessage: true}]);
    }
  }

}
