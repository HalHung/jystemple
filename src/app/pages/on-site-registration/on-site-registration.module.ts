import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnSiteRegistrationRoutingModule } from './on-site-registration-routing.module';
import { OnSiteRegistrationPage } from './on-site-registration.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [OnSiteRegistrationPage],
  imports: [
    CommonModule,
    OnSiteRegistrationRoutingModule,
    IonicModule
  ]
})
export class OnSiteRegistrationPageModule { }
