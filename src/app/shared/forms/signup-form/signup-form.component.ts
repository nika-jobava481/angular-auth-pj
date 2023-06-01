import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { firebaseConfig } from 'src/environment/firebase';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

  usermail:string=''
  userpass:string=''
  userid:string=''

  constructor(){
    firebase.initializeApp(firebaseConfig);
  }

  handleMail(event:string){
    this.usermail=event
  }
  handlePass(event:string){
    this.userpass=event
  }
  handleID(event:string){
    this.userid=event
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

  signUpClick(){
    this.signUp(this.usermail, this.userpass)
  }

}
