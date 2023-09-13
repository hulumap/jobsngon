import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
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
