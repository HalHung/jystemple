import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRegistrationRoutingModule } from './new-registration-routing.module';
import { NewRegistrationPage } from './new-registration.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [NewRegistrationPage],
  imports: [
    CommonModule,
    NewRegistrationRoutingModule,
    IonicModule
  ]
})
export class NewRegistrationPageModule { }
