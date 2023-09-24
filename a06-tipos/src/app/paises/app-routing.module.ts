import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';

const routes: Routes = [
  {
    path: '', component: ListadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),

  ],


  exports: [RouterModule]
})
export class AppRoutingModule { }
