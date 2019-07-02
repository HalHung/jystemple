import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElecSerialNumPage } from './elec-serial-num.page';

const routes: Routes = [
  {path: '', component: ElecSerialNumPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElecSerialNumRoutingModule { }
