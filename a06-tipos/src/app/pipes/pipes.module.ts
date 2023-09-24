import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';


import { PipesComponent } from './pipes.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData, CommonModule } from '@angular/common';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
import { PipeRoutingModule } from './pipe-routing.module';


registerLocaleData(localeEs);

@NgModule({
  declarations: [
    PipesComponent,
    CapitalizadoPipe,
    DomSeguroPipe,
    ContrasenaPipe
  ],
  imports: [CommonModule,
  PipeRoutingModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  
})
export class PipesModule { }
