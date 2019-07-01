import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule
  ]
})
export class HomePageModule { }
