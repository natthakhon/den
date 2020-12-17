import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})

export class BasketComponent{
  basketForm : FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.basketForm = this.formBuilder.group({
        address:[],
      });
  }

  
}
