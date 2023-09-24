import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, activar: boolean = true): any {
    if (activar) {
      let salida: string = '';
      for(let i=0;i<value.length;i++){
        salida += '*';
      }
      return salida;
    }


    return value;
  }

}
