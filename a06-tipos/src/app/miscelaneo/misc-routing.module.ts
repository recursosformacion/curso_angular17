import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIOS_ROUTES } from './components/usuario/usuario.routes';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuario/:id' , 
    component: UsuarioComponent,
    children: USUARIOS_ROUTES
  },
  {path: '', redirectTo:'home', pathMatch: 'full'},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  
],
  exports: [RouterModule]
})
export class MiscRoutingModule { }
