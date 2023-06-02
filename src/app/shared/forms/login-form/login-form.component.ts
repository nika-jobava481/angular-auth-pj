import { Component } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { AuthService } from 'src/app/core/auth.service';
import { firebaseConfig } from 'src/environment/firebase';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  constructor(private authServ:AuthService){}

  handleMail(event:string){
    this.authServ.usermail=event
  }
  handlePass(event:string){
    this.authServ.userpass=event
  }

  signInClick(){
    this.authServ.signIn(this.authServ.usermail, this.authServ.userpass)
  }
  

}
