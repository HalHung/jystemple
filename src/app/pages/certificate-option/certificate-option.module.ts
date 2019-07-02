import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateOptionRoutingModule } from './certificate-option-routing.module';
import { CertificateOptionPage } from './certificate-option.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CertificateOptionPage],
  imports: [
    CommonModule,
    CertificateOptionRoutingModule,
    IonicModule
  ]
})
export class CertificateOptionPageModule { }
