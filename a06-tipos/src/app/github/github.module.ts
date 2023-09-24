import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubRoutingModule } from './github-routing.module';
import { GithubComponent } from './github.component';
import { ListUsuariosComponent } from './components/list-usuarios/list-usuarios.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [GithubComponent, ListUsuariosComponent],
  imports: [
  
  CommonModule,
    GithubRoutingModule,
    HttpClientModule
  ]
})
export class GithubModule { }
