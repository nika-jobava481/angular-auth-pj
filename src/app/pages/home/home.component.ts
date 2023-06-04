import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { firebaseConfig } from 'src/environment/firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild("username") usernameInp!: ElementRef
  user = this.authServ.user

  constructor(private authServ: AuthService) { }


  signOut() {
    this.authServ.signOut()
  }


  updateUserInfo(obj: object) {
    const user = firebase.auth().currentUser;
    if (user) {
      user.updateProfile(obj)
        .then(() => {
          console.log('User info updated successfully.');
          console.log(user)
        })
        .catch((error) => {
          console.log('Error updating user info:', error);
        });
    }
  }



  pushInfo() {
    if (this.usernameInp.nativeElement.value.trim().length > 0) {
      this.updateUserInfo({
        displayName: this.usernameInp.nativeElement.value
      })
    }

  }

}





