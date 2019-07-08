import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignDonaFoodRoutingModule } from './sign-dona-food-routing.module';
import { SignDonaFoodPage } from './sign-dona-food.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SignDonaFoodPage],
  imports: [
    CommonModule,
    SignDonaFoodRoutingModule,
    IonicModule
  ]
})
export class SignDonaFoodPageModule { }
