import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TempleFamilyMemberRoutingModule } from './temple-family-member-routing.module';
import { TempleFamilyMemberPage } from './temple-family-member.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [TempleFamilyMemberPage],
  imports: [
    CommonModule,
    TempleFamilyMemberRoutingModule,
    IonicModule
  ]
})
export class TempleFamilyMemberPageModule { }
