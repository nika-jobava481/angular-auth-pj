import { Component } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { firebaseConfig } from 'src/environment/firebase';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  
  usermail:string=''
  userpass:string=''

  constructor(private router: Router){
    firebase.initializeApp(firebaseConfig);
  }

  handleMail(event:string){
    this.usermail=event
  }
  handlePass(event:string){
    this.userpass=event
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

  signInClick(){
    this.signIn(this.usermail, this.userpass)
  }
  

}
