import { Component,forwardRef,OnInit } from '@angular/core';
import { Address} from '../../vm/address';
import { HttpClient } from '@angular/common/http';
import { ZipCodeFile} from 'src/vm/zip';
import {
  FormBuilder,
  Validators,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormControl,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AddressComponent),
    multi: true
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => AddressComponent),
    multi: true
  }
  ],
})

export class AddressComponent implements OnInit,ControlValueAccessor {

  subscriptions: Subscription[] = [];
  address! : Address;
  txtstrs: string[] = [];
  zipcodefiles: ZipCodeFile[] = [];
  val = '';
  addressForm = this.fb.group({
    address1:['',Validators.required],
    address2:[''],
    zip:['',Validators.required],
  });
  zipcodes: string[]=[];
  selectedZip!:ZipCodeFile;

  constructor(private http: HttpClient,private fb: FormBuilder) {
    this.subscriptions.push(
      // any time the inner form changes update the parent of any change
      this.addressForm.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouch();
      })
    );
  }

  onChange: any = () => {}
  onTouch: any = () => {}

  writeValue(obj: any): void {
    this.val = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  ngOnInit(): void {
    this.readfile();
  }

  readfile(){
    this.txtstrs = [];
    this.http.get('assets/zip.txt', { responseType: 'text' })
      .subscribe(data => {
        let content = data.split('\t');
        content.forEach(element => {
          let con = element.split('\r\n')
          if (con.length > 1){
            con.forEach(item=>{
              this.txtstrs.push(item);
            });
          }else{
            this.txtstrs.push(element);
          }
        });
      }
      , (error)=>{}
      , ()=>{
          this.convert2Address();
        });
  }

  getaddress(){
    this.selectedZip = <ZipCodeFile>this.zipcodefiles.find(item=>item.Zip==this.addressForm.controls['zip'].value);
  }

  convert2Address(){
    this.zipcodefiles = [];
    this.zipcodes = [];
    let changwad = '';
    let khet = '';
    let tumbol = '';
    let zip = '';

    for (let i = 0; i < this.txtstrs.length; i++){
      if (i%4 == 0){
        changwad = this.txtstrs[i];
      }else if(i%4 == 1){
        khet = this.txtstrs[i];
      }else if(i%4 == 2){
        tumbol = this.txtstrs[i];
      }else{
        zip = this.txtstrs[i];
        if (!this.zipcodes.includes(zip)){
          this.zipcodes.push(zip);
        }
        this.zipcodefiles.push(new ZipCodeFile(changwad,khet,tumbol,zip));
      }
    }
  }

  validate(_: FormControl) {
    return this.addressForm.valid ? null : { address: { valid: false } };
  }

}
