import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable, from, throwError, EMPTY } from 'rxjs';




describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null)

    beforeEach(() => {
        componente = new MedicosComponent(servicio);
    });


    it('Debe cargar medicos', () => {
        const medicos = ['medico 1', 'medico 2', ' medico 3']
        spyOn(servicio, 'getMedicos').and.callFake(() => {
            return from([medicos]);
        })
        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);
    });

    it('Agrega medico', () => {
        const medico = { id: 1, Nombre: 'Pepe' };
        spyOn(servicio, 'agregarMedico')
            .and.returnValue(from([medico]));

        componente.agregarMedico();
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    })

    it('Comprobacion mensaje error', () => {
        const errorMio = 'no se pudo conectar';
        spyOn(servicio, 'agregarMedico')
            .and.returnValue(throwError(errorMio));
        componente.agregarMedico();
        expect(componente.mensajeError).toBe(errorMio);
    })

    it('Comprobar que llamo al servicio borrarMedico', () => {
        spyOn(window, 'confirm' ).and.returnValues(true)
        const espia = spyOn(servicio, 'borrarMedico')
            .and.returnValue( EMPTY );
        componente.borrarMedico('1');
        expect( espia ).toHaveBeenCalledWith('1');
    })

});
