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

  user:any;

  constructor(private router: Router){
    firebase.initializeApp(firebaseConfig);
  }

  signIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Sign-in successful
        this.user = userCredential.user;
        console.log(this.user.uid);
        console.log(this.user);
        
        // Navigate to the home screen
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        // Handle sign-in error
        console.log(error);
      });
  }

  signOut() {
    firebase.auth().signOut()
      .then(() => {
        console.log('Signed out');
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.log('Error signing out:', error);
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
