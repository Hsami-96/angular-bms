import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private eventAuthError = new BehaviorSubject<string>('');
  eventAuthError$ = this.eventAuthError.asObservable();
  isLoggedIn: boolean;
  isUserCreated: boolean;
  constructor(public afAuth: AngularFireAuth, private db: AngularFirestore, public router: Router) {}

  async googleAuthLogin(){
    return await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result) => {
      this.isLoggedIn = true;
      }).catch((error) => {
        this.isLoggedIn = false;
        console.log(error);
      });
  }

  async UPAuthRegister(user: User) {
    console.log(user.email);
    return await this.afAuth.createUserWithEmailAndPassword(user.email, user.password).then(userCred => {
      userCred.user.updateProfile({
        displayName: user.displayName
      });
      this.db.doc(`Users/${userCred.user.uid}`).set({
        displayName: user.displayName,
        email: user.email
      }).then(() => {
        this.isUserCreated = true;
      });
    })
    .catch(e => {
      console.log(e);
      this.eventAuthError.next(e);
    });
  }
}
