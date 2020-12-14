import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {PhoneType} from '../../vm/enum/phonetype'

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})

export class PhoneComponent implements OnInit {

  options! : string[];
  phone!: any;
  
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.options = Object.keys(PhoneType);
    this.options = this.options.slice(this.options.length / 2);
  }

  phoneForm = this.fb.group({
    number:[''],
    type:['']
  });

  parseValue(value: any) {
    this.phone = PhoneType[value];
  }

}
