import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignDonaTemplePage } from './sign-dona-temple.page';

const routes: Routes = [
  {path: '', component: SignDonaTemplePage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignDonaTempleRoutingModule { }
