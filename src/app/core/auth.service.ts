import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { firebaseConfig } from 'src/environment/firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usermail:string=''
  userpass:string=''
  userid:string=''

  constructor(private router: Router){
    firebase.initializeApp(firebaseConfig);
  }

  signIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Sign-in successful
        const user = userCredential.user;
        console.log(user);
        
        // Navigate to the home screen
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        // Handle sign-in error
        console.log(error);
      });
  }

  signUp(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Sign-up successful
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle sign-up error
        console.log(error);
      });
  }
}
