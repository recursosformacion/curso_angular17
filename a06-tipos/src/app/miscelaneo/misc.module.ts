import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MiscComponent } from './misc.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { ClasesComponent } from './components/clases/clases.component';
import { ResaltadoDirective } from './directivas/resaltado.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MultipleComponent } from './components/multiple/multiple.component';
import { CommonModule } from '@angular/common';
import { MiscRoutingModule } from './misc-routing.module';

@NgModule({
  declarations: [
    MiscComponent,
    NgStyleComponent,
    CssComponent,
    ClasesComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent,
    NavbarComponent,
    MultipleComponent,
    
  ],
  imports: [CommonModule, MiscRoutingModule],
  providers: [],
  bootstrap: [MiscComponent]
})
export class MiscModule { }
