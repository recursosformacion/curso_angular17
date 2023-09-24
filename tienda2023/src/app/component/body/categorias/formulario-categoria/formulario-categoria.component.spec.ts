import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FormularioCategoriaComponent } from './formulario-categoria.component';
import { ConexionService } from 'src/app/service/conexion.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { Categoria } from 'src/app/interfaces/Categoria';
import { from } from 'rxjs';

describe('FormularioCategoriaComponent', () => {
  let component: FormularioCategoriaComponent;
  let fixture: ComponentFixture<FormularioCategoriaComponent>;
  let espia: any;
  let comunicaciones: ConexionService;

  let categoria: Categoria = {
    id_categoria: 1,
    cat_nombre: "descripcion",
    cat_descripcion: "Esto es la descripciuon"
  }
  let categoriaJson = '{"id_categoria":1,"cat_nombre":"descripcion","cat_descripcion":"Esto es la descripciuon"}';
  let data: any = '{"status":1, "data":' + categoriaJson + '}';
  let jsonResp: any = '{ "status": 1, "data": [{ "id_categoria": 3154, "cat_nombre": "Incienso Solido 100% Natural", "cat_descripcion": "Los incienso 100% natural  sólidos son  ladrillo que  se enriquecen con varios ingredientes naturales incluyendo las maderas aromáticas, flores exóticas, cortezas naturales, extractos de árbol y plant" }, { "id_categoria": 3152, "cat_nombre": "Incienso varilla natural", "cat_descripcion": "Uno de los formatos de presentación mas antiguos de la historia del incienso, que en su elaboración se utilizan diferentes materiales de la naturaleza (maderas, bambú, raíces, etc )" }, { "id_categoria": 3153, "cat_nombre": "Incienso Palo Santo", "cat_descripcion": "Desde hace siglos, los chamanes y sanadores Incas, hicieron famosa las cualidades de limpieza de la madera y sus regalos de protección. Actualmente muchas culturas indígenas lo siguen utilizando para " }, { "id_categoria": 3155, "cat_nombre": "Resinas naturales", "cat_descripcion": "Las resinas duras son brillantes y quebradizas cono el vidrio, entre ellas se encuentra el ámbar, el copal, la sandáraca entre otras." }] }'

  let categoriaVacio: Categoria = {
    id_categoria: 0,
    cat_nombre: "",
    cat_descripcion: ""
  }




  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioCategoriaComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [ConexionService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormularioCategoriaComponent);
    component = fixture.componentInstance;
    //comunicaciones = debugElement.injector.get(ConexionService);
    comunicaciones = TestBed.get(ConexionService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('comprobando carga act (getParam)', () => {
    spyOn(component, 'getId').and.returnValue(1);
    spyOn(component, 'getOpcion').and.returnValue('act');
    component.getParam();
    expect(component.id).toBe(1);
    expect(component.opcion).toBe('act');
  })


  let falsaRespuesta = "Hola";


  // it('comprobando conexion.putApi',
  //   ()=>
  //         component.categoria = categoria;
  //         espia = spyOn(comunicaciones, 'postApi').and.callFake(() => {
  //           return from([falsaRespuesta]);
  //         })

  //         console.log("********************************");
  //         console.log(espia);
  //         component.deFormulario('ins');
  //         expect(espia).toBe(1);
  //         expect(component.opcion).toBe('act');
  //       }
  //     }));
  //****************************************************************** */
  it('comprobando conexion.leerApi',
    async () => {
      spyOn(comunicaciones, 'leerApi').and.callFake(() => {
        return from([JSON.parse(data)]);
      });
      component.getInformacion(1);
      expect(component.categoria).toEqual(categoria);
    });


  it('comprobando getInicio',
    () => {
      spyOn(component, 'getId').and.returnValue(2);
      spyOn(component, 'getOpcion').and.returnValue('act');
      espia = spyOn(component,"getInformacion").and.returnValue();
      component.getInicio();
      expect(espia).toHaveBeenCalledWith(2);
      expect(component.soloLectura).toBe(false);
      expect(component.boton).toBe("Actualizar");
      
    }
  );
  it('comprobando getInicio',
    () => {
      spyOn(component, 'getId').and.returnValue(3);
      spyOn(component, 'getOpcion').and.returnValue('del');
      espia = spyOn(component,"getInformacion").and.returnValue();
      component.getInicio();
      expect(espia).toHaveBeenCalledWith(3);
      expect(component.soloLectura).toBe(true);
      expect(component.boton).toBe("Borrar");
    }
  );

});
