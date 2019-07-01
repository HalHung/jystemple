import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'general-activity',
    loadChildren: './pages/general-activity/general-activity.module#GeneralActivityPageModule'
  },
  {
    path: 'family-member',
    loadChildren: './pages/family-member/family-member.module#FamilyMemberPageModule'
  },
  {
    path: 'member-record',
    loadChildren: './pages/member-record/member-record.module#MemberRecordPageModule'
  },
  {
    path: 'new-activity',
    loadChildren: './pages/new-activity/new-activity.module#NewActivityPageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
