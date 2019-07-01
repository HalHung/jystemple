import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberRecordPage } from './member-record.page';

const routes: Routes = [
  {path: '', component: MemberRecordPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRecordRoutingModule { }
