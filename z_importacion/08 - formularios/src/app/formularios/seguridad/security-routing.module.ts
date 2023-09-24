import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { SecretComponent } from './secret/secret.component';


const routes: Routes = [
  {
    path: 'register',
    component: RegistroComponent
  },
  {
    path: 'security/register',
    component: SecretComponent
  },
  {
    path: '**',
    redirectTo: 'register'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
