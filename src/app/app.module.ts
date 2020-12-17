import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {ProductsComponent} from '../app/products/products.component';
import {PriceComponent} from '../app/price/price.component';
import {PhoneComponent} from '../app/phone/phone.component';
import {BasketComponent} from '../app/basket/basket.component';
import {AddressComponent} from '../app/address/address.component';

import {SerialExistsDirective} from '../validators/isSerialExistsDirective';
import {FileUploadedDirective} from '../validators/isUploadFiles';
import {HasRecordDirective} from '../validators/hasRecord';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    PriceComponent,
    PhoneComponent,
    BasketComponent,
    AddressComponent,
    SerialExistsDirective,
    FileUploadedDirective,
    HasRecordDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
