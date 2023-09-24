import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form) {
    border:1px solid red;
  }
  `]
})
export class TemplateComponent implements OnInit {

  forma: FormGroup;
  usuario: object = {
    nombre: '',
    apellidos: '',
    email: '',
    pais: '',
    sexo: ''
  }

paises = [{
  codigo: 'FR',
  nombre: 'Francia'
},
{
  codigo: 'IT',
  nombre: 'Italia'
}]


  constructor() { 
    this.forma = new FormGroup({
      nombre: new FormControl('',Validators.required),
      apellido: new FormControl('', Validators.required),
      correo: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    })
  }

  ngOnInit() {
  }

  guardar(frm: NgForm) {
    console.log('ngForm', frm);
    console.log("Valor frm",frm.value);
    console.log("Usuario", this.usuario);
  }
}