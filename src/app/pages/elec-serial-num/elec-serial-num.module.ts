import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElecSerialNumRoutingModule } from './elec-serial-num-routing.module';
import { ElecSerialNumPage } from './elec-serial-num.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ElecSerialNumPage],
  imports: [
    CommonModule,
    ElecSerialNumRoutingModule,
    IonicModule
  ]
})
export class ElecSerialNumPageModule { }
