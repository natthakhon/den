import { Directive } from "@angular/core";
import { AbstractControl, Validator, NG_VALIDATORS, ValidationErrors } from "@angular/forms";

@Directive({
  selector: '[isFileUploaded]',
  providers: [{ provide: NG_VALIDATORS, useExisting: FileUploadedDirective, multi: true }]
})

export class FileUploadedDirective implements Validator{

  constructor(){

  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value == null || control.value.length == 0){
      return {'fileError':'ไฟล์ไม่ถูกต้อง'}
    }
    else{
      let xlsxExt = control.value.toString();
      if (xlsxExt.substring(xlsxExt.length-4) != 'xlsx'){
        return {'fileError':'ไฟล์ไม่ถูกต้อง'}
      }
    }
    return null;
  }

}
