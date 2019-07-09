import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TempleFamilyMemberPage } from './temple-family-member.page';

const routes: Routes = [
  {path: '', component: TempleFamilyMemberPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TempleFamilyMemberRoutingModule { }
