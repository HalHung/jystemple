import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintingRoutingModule } from './printing-routing.module';
import { PrintingPage } from './printing.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [PrintingPage],
  imports: [
    CommonModule,
    PrintingRoutingModule,
    IonicModule
  ]
})
export class PrintingPageModule { }
