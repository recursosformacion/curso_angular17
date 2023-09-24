import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form) {
    border:1px solid red;
  }
  `]
})
export class TemplateComponent implements OnInit, OnDestroy {

  s1: Subscription;
  s2: Subscription;
  formulario: FormGroup;
  usuario: object = {
    nombre: '',
    apellidos: '',
    email: '',
    pais: '',
    sexo: '',
    pass: ''
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
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      correo: new FormControl('', [
        Validators.required,
        Validators.email,
        this.existeUsuario
      ]),
      pais: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required),
      repass: new FormControl('')
    })
    this.formulario.controls.repass.setValidators([
      Validators.required,
      this.passrepe.bind(this.formulario)
    ]);

  }

  ngOnInit() {

    console.log("En init");
    this.s1 = this.formulario.valueChanges
      .subscribe(data => console.log(data));
    this.s2 = this.formulario.controls.nombre.valueChanges
      .subscribe(data => console.log('nombre:', data));
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.s1.unsubscribe();
    this.s2.unsubscribe();
  }
  guardar(frm: NgForm) {
    console.log('ngForm', frm);
    console.log("Valor frm", frm.value);
    console.log("Usuario", this.usuario);
    this.usuario = frm.value;
  }

  passrepe(control: FormControl) {

    console.log(this);
    // const formulario = this;
    // if (control.value !== formulario.controls.pass.value) {
    //   return 'Error password';
    // }
    // return null;
  }

  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
    const promesa = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'repe') {
            resolve({ existe: true });
          } else {
            resolve(null);
          }
        }, 3000);
      }
    );
    return promesa;
  }
}