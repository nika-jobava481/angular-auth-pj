import { Component ,ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-password-input',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordInputComponent {
  
  @ViewChild("passInp") passInp!:ElementRef
  @ViewChild("checkbox") checkbox!:ElementRef
  @ViewChild("togglepass") eyeicon!:ElementRef

  @Input() uncheckable:boolean=false
  @Output() passEv:EventEmitter<string>=new EventEmitter()
  displaymessage:boolean=true

  constructor(private dataServ:DataService){}

  checkInp(){
    let pass=this.passInp.nativeElement
    if(this.dataServ.validate.password(pass.value)){
      this.displaymessage=false
    }else{
      this.displaymessage=true
    }
    this.passEv.emit(pass.value)
  }

  check(){
    if(!this.uncheckable){
      this.checkbox.nativeElement.checked=true
    }
  }

  tggpass(){
    let pass=this.passInp.nativeElement
    this.eyeicon.nativeElement.classList.toggle("fa-eye")
    this.eyeicon.nativeElement.classList.toggle("fa-eye-slash")
    if(pass.type=="password"){
      pass.type="text"
    }else{
      pass.type="password"
    }
  }
}
