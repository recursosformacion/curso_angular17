import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { TemplateComponent } from './components/template/template/template.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path: 'registro', component: TemplateComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'seguro', component: RegistroComponent
  },
  {
    path: '**',
    redirectTo: 'registro'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
