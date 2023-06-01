import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-private-idinput',
  templateUrl: './private-idinput.component.html',
  styleUrls: ['./private-idinput.component.scss']
})
export class PrivateIDInputComponent {

  @ViewChild("idInp") idInp!: ElementRef
  @ViewChild("checkbox") checkbox!: ElementRef

  @Input() uncheckable: boolean = false
  @Output() idEv: EventEmitter<string> = new EventEmitter()

  displaymessage: boolean = true

  constructor(private dataServ: DataService) { }

  checkInp() {

    
    let id = this.idInp.nativeElement
    if (this.dataServ.validate.personalID(id.value)) {
      this.displaymessage = false
    } else {
      this.displaymessage = true
    }
    this.idEv.emit(id.value)
  }

  kp(event: KeyboardEvent){
    if(event.key ==="e"){
      event.preventDefault()
    }
  }

  check() {
    if (!this.uncheckable) {
      this.checkbox.nativeElement.checked = true
    }
  }


}
