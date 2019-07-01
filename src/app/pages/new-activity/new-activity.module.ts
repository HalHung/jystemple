import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewActivityRoutingModule } from './new-activity-routing.module';
import { NewActivityPage } from './new-activity.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [NewActivityPage],
  imports: [
    CommonModule,
    NewActivityRoutingModule,
    IonicModule
  ]
})
export class NewActivityPageModule { }
