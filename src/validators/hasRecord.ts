import { Directive } from "@angular/core";
import { AbstractControl, Validator, NG_VALIDATORS, ValidationErrors, ValidatorFn } from "@angular/forms";

@Directive({
  selector: '[hasRecord]',
  providers: [{ provide: NG_VALIDATORS, useExisting: HasRecordDirective, multi: true }]
})

export class HasRecordDirective implements Validator{

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value == null || control.value < 1){
      return {'hasRecordError':'ไม่มีข้อมูล'}
    }
    return null;
  }

}
