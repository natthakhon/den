import { DecimalPipe } from '@angular/common';

export class ServicePrice{
  constructor(
    public modelname: string,
    public categoryname: string,
    public warrantyPrice: number[],
    public isWarranty: boolean[],
    public onSiteService: number[],
    public isOnSiteService: boolean[],
    public isMaintenance: boolean,
    public isInstallment: boolean,
    public isOldMachine: boolean
  ){  }
}
