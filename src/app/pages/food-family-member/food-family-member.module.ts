import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodFamilyMemberRoutingModule } from './food-family-member-routing.module';
import { FoodFamilyMemberPage } from './food-family-member.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [FoodFamilyMemberPage],
  imports: [
    CommonModule,
    FoodFamilyMemberRoutingModule,
    IonicModule
  ]
})
export class FoodFamilyMemberPageModule { }
