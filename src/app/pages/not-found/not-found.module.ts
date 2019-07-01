import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundPage } from './not-found.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [NotFoundPage],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    IonicModule
  ]
})
export class NotFoundPageModule { }
