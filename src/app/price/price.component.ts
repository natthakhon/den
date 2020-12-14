import { Component, OnInit } from '@angular/core';
import {ServicePrice} from '../../vm/servicePrice'
import { ActivatedRoute } from '@angular/router';
import {ServicePriceMock} from '../../mock/servicePrice'
import * as XLSX from 'xlsx';
import {serialNoFile} from '../../vm/excel/serialnosFile'

@Component({
  selector: 'app-model',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})

export class PriceComponent implements OnInit{

  price! : ServicePrice;
  serials!:serialNoFile[];
  filecontent:any;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit() {
    this.getModel();
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

  readfile(file:any){
    const reader = new FileReader();
    reader.readAsBinaryString(file.target.files[0]);
    reader.onload = (e: any) => {
      try{
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
        this.serials = (XLSX.utils.sheet_to_json<serialNoFile>(ws, { header: 0 }));
      }
      catch{
        this.serials = [];
      }
    }
  }

  submit(form:any){
    console.log(form.value);
  }
}
