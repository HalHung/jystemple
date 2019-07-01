import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRecordRoutingModule } from './member-record-routing.module';
import { MemberRecordPage } from './member-record.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [MemberRecordPage],
  imports: [
    CommonModule,
    MemberRecordRoutingModule,
    IonicModule
  ]
})
export class MemberRecordPageModule { }
