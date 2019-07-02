import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddNewMemberRoutingModule } from './add-new-member-routing.module';
import { AddNewMemberPage } from './add-new-member.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AddNewMemberPage],
  imports: [
    CommonModule,
    AddNewMemberRoutingModule,
    IonicModule
  ]
})
export class AddNewMemberPageModule { }
