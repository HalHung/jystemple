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
  {
    path: 'not-found',
    loadChildren: './pages/not-found/not-found.module#NotFoundPageModule'
  },
  {
    path: 'add-new-member',
    loadChildren: './pages/add-new-member/add-new-member.module#AddNewMemberPageModule'
  },
  {
    path: 'sum',
    loadChildren: './pages/sum/sum.module#SumPageModule'
  },
  {
    path: 'certificate-option',
    loadChildren: './pages/certificate-option/certificate-option.module#CertificateOptionPageModule'
  },
  {
    path: 'elec-serial-num',
    loadChildren: './pages/elec-serial-num/elec-serial-num.module#ElecSerialNumPageModule'
  },
  {
    path: 'certificate-preview',
    loadChildren: './pages/certificate-preview/certificate-preview.module#CertificatePreviewPageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
