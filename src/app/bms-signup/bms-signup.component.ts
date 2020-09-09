import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication/authentication.service';
import { LoggerService } from 'src/services/logger/logger.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'bms-signup',
  templateUrl: './bms-signup.component.html',
  styleUrls: ['./bms-signup.component.css']
})
export class BmsSignupComponent implements OnInit {
  authError: any;
  user: User;
  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, CustomValidators.email]),
    password: new FormControl('', [Validators.required,
       Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&-]).{8,}')
  ]),
    displayName: new FormControl('', Validators.required)
  });
  get email() {return this.signUpForm.get('email'); }
  get password() {return this.signUpForm.get('password'); }
  constructor(private auth: AuthenticationService, private router: Router, private logger: LoggerService) {
    this.user = { displayName: '', email: '', password: ''};
   }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
    });
  }

  async registerUser(userRegDetails) {
    this.user = {email: userRegDetails.email, password: userRegDetails.password, displayName: userRegDetails.displayName};
    await this.auth.UPAuthRegister(this.user).then(() => {
      this.router.navigate(['/signin', {showUserCreatedMessage: true}]);
    }, (error) => {
      this.logger.error(error);
    });
  }

}
