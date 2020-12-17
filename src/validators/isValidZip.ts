import { Directive } from "@angular/core";
import { AbstractControl, Validator, NG_VALIDATORS, ValidationErrors, } from "@angular/forms";

@Directive({
  selector: '[isValidZip]',
  providers: [{ provide: NG_VALIDATORS, useExisting: IsValidZipcode, multi: true }]
})

export class IsValidZipcode implements Validator{

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value == null || control.value < 1){
      return {'hasRecordError':'ไม่มีข้อมูล'}
    }
    return null;
  }

}
