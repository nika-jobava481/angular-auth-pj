import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { AuthService } from 'src/app/core/auth.service';
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

  constructor(private authServ:AuthService){}

  handleMail(event:string){
    this.authServ.usermail=event
  }
  handlePass(event:string){
    this.authServ.userpass=event
  }
  handleID(event:string){
    this.authServ.userid=event
  }

  signUpClick(){
    this.authServ.signUp(this.authServ.usermail, this.authServ.userpass)
  }

}
