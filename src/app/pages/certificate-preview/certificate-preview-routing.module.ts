import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificatePreviewPage } from './certificate-preview.page';

const routes: Routes = [
  {path: '', component: CertificatePreviewPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificatePreviewRoutingModule { }
