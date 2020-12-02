import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ProductsComponent} from '../app/products/products.component';
import {PriceComponent} from '../app/price/price.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    PriceComponent,
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
