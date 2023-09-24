import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumdssComponent } from './breadcrumdss/breadcrumdss.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';



@NgModule({
  declarations: [
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumdssComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumdssComponent,
  ]
})
export class SharedModule { }
