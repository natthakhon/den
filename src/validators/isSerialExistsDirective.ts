import { Directive } from "@angular/core";
import { AbstractControl, Validator, NG_VALIDATORS, ValidationErrors } from "@angular/forms";
import { SERIALS} from "../mock/serial";

@Directive({
  selector: '[isSerialExist1]',
  providers: [{ provide: NG_VALIDATORS, useExisting: SerialExistsDirective, multi: true }]
})

export class SerialExistsDirective implements Validator{

  constructor(){}

  validate(control: AbstractControl): ValidationErrors | null {

    if (control.value != ''){
      if (!SERIALS.includes(control.value)){
        return { 'isSerialExist': 'ไม่พบหมายเลขเครื่อง' };
      }
      else{
        return null;
      }
    }
    else{
      return { 'isSerialExist': 'กรุณาใส่หมายเลขเครื่อง' };
    }
  }
}
