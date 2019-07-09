import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignDonaTempleRoutingModule } from './sign-dona-temple-routing.module';
import { SignDonaTemplePage } from './sign-dona-temple.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SignDonaTemplePage],
  imports: [
    CommonModule,
    SignDonaTempleRoutingModule,
    IonicModule
  ]
})
export class SignDonaTemplePageModule { }
