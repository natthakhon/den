export class ServicePrice{
  constructor(
    public modelname: string,
    public categoryname: string,
    public warrantyPrice: number[],
    public isWarranty: boolean[],
    public displayWarranty: number[],
    public onSiteService: number[],
    public isOnSiteService: boolean[],
    public displayOnsite: number[],
    public isMaintenance: boolean,
    public maintenancePrice: number,
    public selectedMaintenancePrice: number,
    public isInstallment: boolean,
    public installprice: number,
    public selectedInstallPrice: number,
    public isOldMachine: boolean,
    public totalwarranty: number,
    public totalonsite: number,
    public total: number,
    public colmax: number
  )
  {
    this.setvalue();
  }

  setvalue(){
    this.setcol็Max();
    this.setdisplayWarranty();
    this.setdisplayOnSite();
    this.setonsite();
    this.setwarranty();
    this.total = this.totalwarranty + this.totalonsite +
                  this.selectedMaintenancePrice + this.selectedInstallPrice;
  }

  setwarranty(){
    this.totalwarranty = 0;

    for (let i = 0; i < this.isWarranty.length; i++) {
      if (this.isWarranty[i] == true){
        this.totalwarranty = this.warrantyPrice[i];
        break;
      }
    }
  }

  setonsite(){
    this.totalonsite = 0;

    for (let i = 0; i < this.isOnSiteService.length; i++) {
      if (this.isOnSiteService[i] == true){
        this.totalonsite = this.onSiteService[i];
        break;
      }
    }
  }

  setMetenancePrice(){
    if (this.isMaintenance == true){
      this.selectedMaintenancePrice = this.maintenancePrice;
    }
    else{
      this.selectedMaintenancePrice = 0;
    }
  }

  setInstall(){
    if (this.isInstallment == true){
      this.selectedInstallPrice = this.installprice;
    }
    else{
      this.selectedInstallPrice = 0;
    }
  }

  setcol็Max(){
    this.colmax=0;
    if (this.warrantyPrice.length >= this.onSiteService.length){
      this.colmax = this.warrantyPrice.length
    }
    else{
      this.colmax = this.onSiteService.length
    }
  }

  setdisplayWarranty(){
    for (let i = 0; i < this.colmax; i++) {
      if (i < this.warrantyPrice.length){
        this.displayWarranty[i] = this.warrantyPrice[i];
      }
      else{
        this.displayWarranty[i] = 0;
      }
    }
  }

  setdisplayOnSite(){
    for (let i = 0; i < this.colmax; i++) {
      if (i < this.onSiteService.length){
        this.displayOnsite[i] = this.onSiteService[i];
      }
      else{
        this.displayOnsite[i] = 0;
      }
    }
  }
}
