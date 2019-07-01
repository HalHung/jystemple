import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralActivityPage } from './general-activity.page';

const routes: Routes = [
  {path: '', component: GeneralActivityPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralActivityRoutingModule { }
