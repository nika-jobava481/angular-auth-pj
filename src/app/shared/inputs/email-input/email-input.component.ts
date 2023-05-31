import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss']
})
export class EmailInputComponent {
  @ViewChild('emailInp') emailInp!:ElementRef
  @ViewChild("checkbox") checkbox!:ElementRef
  @Output() emailEv:EventEmitter<string>=new EventEmitter()
  displaymessage:boolean=true

  constructor(private dataServ:DataService){}

  checkInp(){
    let email=this.emailInp.nativeElement
    if(this.dataServ.validate.email(email.value)){
      this.displaymessage=false
    }else{
      this.displaymessage=true
    }
    this.emailEv.emit(email.value)
  }

  check(){
    this.checkbox.nativeElement.checked=true
  }

  
}
