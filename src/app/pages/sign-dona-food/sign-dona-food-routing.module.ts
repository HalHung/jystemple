import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignDonaFoodPage } from './sign-dona-food.page';

const routes: Routes = [
  {path: '', component: SignDonaFoodPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignDonaFoodRoutingModule { }
