import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadChildren: './pages/home/home.module#HomePageModule'
      }
    ]
  },
  {
    path: 'general-activity',
    children: [
      {
        path: '',
        loadChildren: './pages/general-activity/general-activity.module#GeneralActivityPageModule'
      },
      {
        path: 'family-member',
        children: [
          {
            path: '',
            loadChildren: './pages/family-member/family-member.module#FamilyMemberPageModule'
          },
          {
            path: 'member-record',
            loadChildren: './pages/member-record/member-record.module#MemberRecordPageModule'
          },
        ]
      }
    ]
  },
  {
    path: 'sign-dona-food',
    children: [
      {
        path: '',
        loadChildren: './pages/sign-dona-food/sign-dona-food.module#SignDonaFoodPageModule'
      },
      {
        path: 'food-family-member',
        children: [
          {
            path: '',
            loadChildren: './pages/food-family-member/food-family-member.module#FoodFamilyMemberPageModule'
          }
        ]
      },
    ]
  },
  {
    path: 'sign-dona-temple',
    children: [
      {
        path: '',
        loadChildren: './pages/sign-dona-temple/sign-dona-temple.module#SignDonaTemplePageModule'
      },
      {
        path: 'temple-family-member',
        children: [
          {
            path: '',
            loadChildren: './pages/temple-family-member/temple-family-member.module#TempleFamilyMemberPageModule'
          },
        ]
      },
    ]
  },
  {
    path: 'sum',
    children: [
      {
        path: '',
        loadChildren: './pages/sum/sum.module#SumPageModule'
      },
      {
        path: 'certificate-option',
        children: [
          {
            path: '',
            loadChildren: './pages/certificate-option/certificate-option.module#CertificateOptionPageModule'
          },
          {
            path: 'certificate-preview',
            children: [
              {
                path: '',
                loadChildren: './pages/certificate-preview/certificate-preview.module#CertificatePreviewPageModule'
              },
              {
                path: 'printing',
                loadChildren: './pages/printing/printing.module#PrintingPageModule'
              },
            ]
          },
        ]
      },
    ]
  },
  {
    path: 'new-registration',
    children: [
      {
        path: '',
        loadChildren: './pages/new-registration/new-registration.module#NewRegistrationPageModule'
      },
      {
        path: 'on-site-registration',
        loadChildren: './pages/on-site-registration/on-site-registration.module#OnSiteRegistrationPageModule'
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
