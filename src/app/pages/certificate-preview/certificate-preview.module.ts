import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificatePreviewRoutingModule } from './certificate-preview-routing.module';
import { CertificatePreviewPage } from './certificate-preview.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CertificatePreviewPage],
  imports: [
    CommonModule,
    CertificatePreviewRoutingModule,
    IonicModule
  ]
})
export class CertificatePreviewPageModule { }
