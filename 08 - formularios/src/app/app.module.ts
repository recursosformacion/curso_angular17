import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template/template.component';
import { DataComponent } from './components/data/data/data.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { SecretComponent } from './seguridad/secret/secret.component';
import { SecurityRoutingModule } from './seguridad/security-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DataComponent,
    RegistroComponent,
    SecretComponent
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SecurityRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
