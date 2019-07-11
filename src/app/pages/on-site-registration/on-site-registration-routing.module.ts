import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnSiteRegistrationPage } from './on-site-registration.page';

const routes: Routes = [
  {path: '', component: OnSiteRegistrationPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnSiteRegistrationRoutingModule { }
