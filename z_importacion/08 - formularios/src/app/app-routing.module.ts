import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { SecretComponent } from './seguridad/secret/secret.component';
import { TemplateComponent } from './formularios/components/template/template/template.component';
import { LoginComponent } from './formularios/components/login/login.component';


const routes: Routes = [
  {
    path: '', 
    loadChildren= './'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
