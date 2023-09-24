import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './components/listado/listado.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [ListadoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ]
})
export class PaisesModule { }
