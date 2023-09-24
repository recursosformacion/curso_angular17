import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  recordarme =  false;

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() { 
    if ( localStorage.getItem('email' ) ){
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) { return; }

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Realizando la conexion....'
    });
    Swal.showLoading();

    this.auth.login(this.usuario)
      .subscribe(resp => {
        Swal.close();
        console.log('Respuesta:', resp);
        this.router.navigateByUrl('/home');
        if (this.recordarme ){
          localStorage.setItem('email', this.usuario.email);
        } else {
          localStorage.setItem('email','');
        }
      }, (err) => {
        Swal.fire({
          type: 'error',
          text: 'ERROR:' + err.error.error.message
        });

      });
  }
}


