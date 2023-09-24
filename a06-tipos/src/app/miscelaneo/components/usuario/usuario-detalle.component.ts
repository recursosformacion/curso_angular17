import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle works!
    </p>
  `,
  styles: []
})
export class UsuarioDetalleComponent implements OnInit {

  constructor(private  ruta: ActivatedRoute) {
    this.ruta.parent.params.subscribe((parametros:any) => {
      console.log("Parametros hijo (desde parent)");
      console.log( parametros  );
    })
   }

  ngOnInit() {
  }

}
