import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { CalcComponent } from './componentes/calc/calc.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';

const routes: Routes = [
  {path:'dashboard' ,component:DashboardComponent},
  {path:'heroes', component:HeroesComponent},
  {path:'calc', component:CalcComponent},
  {path:'detalle/:id', component:HeroesDetailComponent},
  {path:'', redirectTo:'/dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
