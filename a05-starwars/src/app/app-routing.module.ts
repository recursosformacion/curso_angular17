import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PrincipalComponent } from './components/principal/principal.component';

const ROUTES: Routes = [
  { path: 'home', component: PrincipalComponent }
];


@NgModule({
  declarations: [],
  imports: [
  CommonModule
  ]
})
export class AppRoutingModule { }
