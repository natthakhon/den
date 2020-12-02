export class ServicePrice{
  constructor(
    public modelname: string,
    public categoryname: string,
    public warrantyPrice: number[], // price from api
    public displayWarranty: number[], // adjusted warranty price to display on screen
    public onSiteService: number[],   // price from api
    public displayOnsite: number[],     // adjusted onsite price to display on screen
    public isMaintenance: boolean,      // maintenance option checkbox
    public maintenancePrice: number,   // maintenance price from api
    public selectedMaintenancePrice: number,   // maintenance price from user
    public isInstallment: boolean,     // installment option checkbox
    public installprice: number,       // install price from api
    public selectedInstallPrice: number,   // install price from user
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

  setTotal(){
    this.total = parseInt(this.selectedInstallPrice.toString()) +
                  parseInt(this.selectedMaintenancePrice.toString()) +
                  parseInt(this.totalwarranty.toString()) +
                  parseInt(this.totalonsite.toString());
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
