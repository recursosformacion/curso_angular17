import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { App1SharedModule } from 'projects/app1/src/app/app.module';
import { AppotraSharedModule } from 'projects/appotra/src/app/app.module';


const routes: Routes = [
  {
    path: 'app1',
    loadChildren: '../../projects/app1/src/app/app.module#App1SharedModule'
  },
  {
    path: 'app2',
    loadChildren: '../../projects/appotra/src/app/app.module#AppotraSharedModule'
  },
  { path: '**', redirectTo: '/app1/one' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  App1SharedModule.forRoot(),
  AppotraSharedModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
