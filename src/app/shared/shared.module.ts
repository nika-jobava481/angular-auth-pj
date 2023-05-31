import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailInputComponent } from './inputs/email-input/email-input.component';
import { PasswordInputComponent } from './inputs/password/password.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { SignupFormComponent } from './forms/signup-form/signup-form.component';
import { ProfileFormComponent } from './forms/profile-form/profile-form.component';
import { PrivateIDInputComponent } from './inputs/private-idinput/private-idinput.component';

const dec= [EmailInputComponent,
  PasswordInputComponent,
  LoginFormComponent,
  SignupFormComponent,
  ProfileFormComponent,
  PrivateIDInputComponent]

@NgModule({
  declarations: [
    dec
  ],
  imports: [
    CommonModule
  ],
  exports:[
    dec
  ]
})
export class SharedModule { }
