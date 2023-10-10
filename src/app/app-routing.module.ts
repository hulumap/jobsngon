import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: "**",
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'tim-viec-lam',
    loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule),
  },
  {
    path: 'viec-lam/:link',
    loadChildren: () => import('./job-detail/job-detail.module').then(m => m.JobDetailModule),
  },
  {
    path: 'cong-ty/:link',
    loadChildren: () => import('./detail-company/detail-company.module').then(m => m.DetailCompanyModule),
  },
  {
    path: 'cong-ty',
    loadChildren: () => import('./company/company.module').then(m => m.CompanyModule)
  },
  {
    path: 'tinh-luong',
    loadChildren: () => import('./caculate-salary/caculate-salary.module').then(m => m.CaculateSalaryModule)
  },
  {
    path: 'tinh-thue-TNCN',
    loadChildren: () => import('./caculate-tax/caculate-tax.module').then(m => m.CaculateTaxModule)
  },
  {
    path: 'doc-thu',
    loadChildren: () => import('./letters/letters.module').then(m => m.LettersModule)
  },
  {
    path: 'hat-giong-tam-hon',
    loadChildren: () => import('./chicken-soup/chicken-soup.module').then(m => m.ChickenSoupModule)
  },
  {
    path: 'mau-cv',
    loadChildren: () => import('./template/template.module').then(m => m.TemplateModule)
  },
  {
    path: 'tai-khoan',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'online/:id/:name',
    loadChildren: () => import('./online/online.module').then(m => m.OnlineModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
