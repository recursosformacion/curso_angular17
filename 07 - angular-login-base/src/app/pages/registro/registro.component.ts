import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();

  }

  onSubmit(form: NgForm) {
    if (form.invalid) { return; }

    this.auth.nuevoUsuario(this.usuario)
      .subscribe(resp => {
        this.router.navigateByUrl('/home');
        console.log('Respuesta:', resp);
      }, (err) => {
        console.log('ERROR', err.error.error.message);
      });
  }
}
