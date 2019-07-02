import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewMemberPage } from './add-new-member.page';

const routes: Routes = [
  {path: '', component: AddNewMemberPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddNewMemberRoutingModule { }
