import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent} from './products/products.component';
import { PriceComponent} from './price/price.component';
import {BasketComponent} from './basket/basket.component';
import {PhoneComponent} from './phone/phone.component';

const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'product', component: ProductsComponent },
  { path: 'price/:name', component: PriceComponent },
  { path: 'basket', component: BasketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
