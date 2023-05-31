import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  count(str:string, sub:string){
    return (str.split(sub).length-1)
  }

  testNum(str:string) {
    return /\d/.test(str);
  }

  testSym(str:string) {
    return /[^a-zA-Z0-9]/.test(str);
  }

  isNumeric(str:string) {
    return /^\d$|^\d+$/.test(str);
  }

  validate={
    password(str:string,obj:DataService=new DataService()):boolean{
      if(str.length>4&&obj.testSym(str)&&obj.testNum(str)){
        return true
      }
      return false
    },

    email(stri:string,obj:DataService=new DataService()):boolean{
      let str=stri.trim()
      if(obj.count(str, "@")&&obj.count(str.split("@")[1],".")>=1&& str.split("@")[0].replace(".","").length>0 && str.split("@")[1].split(".")[0].length>0&&str.split("@")[1].split(".")[1].length>0  &&!str.includes(" ")){
        return true
      } 
      return false
    },

    personalID(str:string,obj:DataService=new DataService()):boolean{
      if(str.length===11&&obj.isNumeric(str)){
        return true
      }
      return false
    }
  }
}
