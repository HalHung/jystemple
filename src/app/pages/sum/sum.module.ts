import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SumRoutingModule } from './sum-routing.module';
import { SumPage } from './sum.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SumPage],
  imports: [
    CommonModule,
    SumRoutingModule,
    IonicModule
  ]
})
export class SumPageModule { }
