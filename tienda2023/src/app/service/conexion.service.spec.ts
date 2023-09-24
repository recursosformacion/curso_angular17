import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConexionService } from './conexion.service';


describe('Conexionservice', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ConexionService]
    }));


    it('Se crea', () => {
        const service: ConexionService = TestBed.get(ConexionService);
        expect(service).toBeTruthy();
    });

    it('Dispone de la funcion leerApi', () => {
        const service: ConexionService = TestBed.get(ConexionService);
        expect(service.leerApi).toBeTruthy();
    });

    it('Dispone de la funcion postApi', () => {
        const service: ConexionService = TestBed.get(ConexionService);
        expect(service.postApi).toBeTruthy();
    });

    it('Dispone de la funcion putApi', () => {
        const service: ConexionService = TestBed.get(ConexionService);
        expect(service.putApi).toBeTruthy();
    });

    it('Dispone de la funcion deleteApi', () => {
        const service: ConexionService = TestBed.get(ConexionService);
        expect(service.deleteApi).toBeTruthy();
    });

});