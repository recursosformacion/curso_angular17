import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'cambio',
    loadChildren: () => import('./rates/rates.module').then(m => m.RatesModule)
  },
  {
    path: 'paises',
    loadChildren: () => import('../../../90-paises_http/src/app/app.module').then(m => m.AppModule)
  },
  {
    path: 'pipes',
    loadChildren: () => import('./pipes/pipes.module').then(m => m.PipesModule)
  },
  {
    path: 'misc',
    loadChildren: () => import('./miscelaneo/misc.module').then(m => m.MiscModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  
],
  
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
