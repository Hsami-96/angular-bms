import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public afAuth: AngularFireAuth) { }

  googleAuth() {
    return this.authLogin(new firebase.auth.GoogleAuthProvider());
  }
  authLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!')
    }).catch((error) => {
        console.log(error)
    })
  }
}
