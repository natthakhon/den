import { Component, OnInit } from '@angular/core';
import {ServicePrice} from '../../vm/servicePrice'
import { ActivatedRoute } from '@angular/router';
import {ServicePriceMock} from '../../mock/servicePrice'

@Component({
  selector: 'app-model',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})

export class PriceComponent implements OnInit{

  price! : ServicePrice;

  constructor(private route: ActivatedRoute){
    this.getModel();
  }

  ngOnInit() {
  }

  getModel():void{
    const name = this.route.snapshot.paramMap.get('name') as string;
    const pricemock = new ServicePriceMock();
    this.price = pricemock.getServicePrice();
  }

  bindMaintenancePrice(){
    this.price.setMetenancePrice();
    this.price.setTotal();
  }

  bindInstallPrice(){
    this.price.setInstall();
    this.price.setTotal();
  }

  bindTotalPrice(){
    this.price.setTotal();
  }
}
