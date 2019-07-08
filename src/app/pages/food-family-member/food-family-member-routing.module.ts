import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodFamilyMemberPage } from './food-family-member.page';

const routes: Routes = [
  {path: '', component: FoodFamilyMemberPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodFamilyMemberRoutingModule { }
