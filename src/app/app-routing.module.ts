import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AmazonComponent} from './amazon/amazon.component';
import {EbayComponent} from './ebay/ebay.component';

const routes: Routes = [
  {path: 'amazon', component: AmazonComponent},
  {path: 'ebay', component: EbayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
