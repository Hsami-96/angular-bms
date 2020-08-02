import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn: boolean;
  name: string;
  constructor(public afAuth: AngularFireAuth, public router: Router) { }

  async googleAuthLogin(){
    return await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
