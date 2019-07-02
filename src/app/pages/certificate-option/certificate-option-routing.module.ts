import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificateOptionPage } from './certificate-option.page';

const routes: Routes = [
  {path: '', component: CertificateOptionPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificateOptionRoutingModule { }
