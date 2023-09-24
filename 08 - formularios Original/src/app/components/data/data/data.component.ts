import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  forma: FormGroup;

  usuario = {
    nombreCompleto: {
      nombre: 'Pepito',
      apellido: 'Perez'
    },
    correo: 'pepito@gmail.com',
    pasatiempos: []                    // ['correr', 'futbol', 'escalada']
  };

  constructor() {
    this.forma = new FormGroup({
      nombreCompleto: new FormGroup({
        nombre: new FormControl('', Validators.required),
        apellido: new FormControl('', Validators.required)
      }),
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
        this.validaNombre
      ]),
      pasatiempos: new FormArray([
        new FormControl('', Validators.required)
      ]),
      username: new FormControl('', Validators.required, this.existeUsuario),
      password1: new FormControl('', Validators.required),
      password2: new FormControl('')
    });

    this.forma.controls.password2.setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ]);

    // this.forma.setValue(this.usuario);

    this.forma.controls.username.valueChanges
      .subscribe(data => {
        console.log(data);
      });
  }

  ngOnInit() { 
  }

  agregarPasatiempo() {
    (this.forma.controls.pasatiempos as FormArray).push(
      new FormControl('', Validators.required)
    );
  }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.usuario);

    // this.forma.reset(this.usuario);
  }



  /* validacion personalizada */

  validaNombre(control: FormControl): { [s: string]: boolean } {

    if (control.value.charAt(0).toUpperCase() === 'A') {
      return { error: true };
    }
    return null;
  }

  noIgual(control: FormControl): { [s: string]: boolean } {

    const forma = this;
    // if (control.value !== this.forma.control.password1.value) {
    //   return { PASS_NOT_EQUAL: true };
    // } 
    return null;
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
