import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyMemberRoutingModule } from './family-member-routing.module';
import { FamilyMemberPage } from './family-member.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [FamilyMemberPage],
  imports: [
    CommonModule,
    FamilyMemberRoutingModule,
    IonicModule
  ]
})
export class FamilyMemberPageModule { }
