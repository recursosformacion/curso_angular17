import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  constructor(private  ruta: ActivatedRoute) { 
    this.ruta.params.subscribe((parametros:any) => {
      console.log("Parametros Parent");
      console.log( parametros  );
    })
  }

  ngOnInit() {
  }

}
