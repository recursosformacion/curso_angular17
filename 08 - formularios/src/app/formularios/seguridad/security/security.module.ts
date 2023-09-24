import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecretComponent } from '../secret/secret.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from '../auth-interceptor.service';
import { RegistroComponent } from '../registro/registro.component';
import { SecurityRoutingModule } from '../security-routing.module';

@NgModule({
  declarations: [RegistroComponent, SecretComponent],
  imports: [CommonModule, SecurityRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class SecurityModule {}