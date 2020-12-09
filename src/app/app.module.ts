import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ProductsComponent} from '../app/products/products.component';
import {PriceComponent} from '../app/price/price.component';

import {SerialExistsDirective} from '../validators/isSerialExistsDirective';
import {FileUploadedDirective} from '../validators/isUploadFiles';
import {HasRecordDirective} from '../validators/hasRecord';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    PriceComponent,
    SerialExistsDirective,
    FileUploadedDirective,
    HasRecordDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
