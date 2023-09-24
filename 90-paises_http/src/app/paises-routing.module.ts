import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ListadoComponent } from './componentes/listado/listado.component';


const ROUTES: Routes = [
  { path: '', component: ListadoComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]

})
export class PaisesRoutingModule { }

