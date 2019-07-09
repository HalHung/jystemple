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
  {
    path: 'printing',
    loadChildren: './pages/printing/printing.module#PrintingPageModule'
  },
  {
    path: 'sign-dona-food',
    loadChildren: './pages/sign-dona-food/sign-dona-food.module#SignDonaFoodPageModule'
  },
  {
    path: 'food-family-member',
    loadChildren: './pages/food-family-member/food-family-member.module#FoodFamilyMemberPageModule'
  },
  {
    path: 'sign-dona-temple',
    loadChildren: './pages/sign-dona-temple/sign-dona-temple.module#SignDonaTemplePageModule'
  },
  {
    path: 'temple-family-member',
    loadChildren: './pages/temple-family-member/temple-family-member.module#TempleFamilyMemberPageModule'
  },
  {
    path: 'new-registration',
    loadChildren: './pages/new-registration/new-registration.module#NewRegistrationPageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
