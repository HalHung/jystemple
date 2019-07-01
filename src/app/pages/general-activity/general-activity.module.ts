import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralActivityRoutingModule } from './general-activity-routing.module';
import { GeneralActivityPage } from './general-activity.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [GeneralActivityPage],
  imports: [
    CommonModule,
    GeneralActivityRoutingModule,
    IonicModule
  ]
})
export class GeneralActivityPageModule { }
