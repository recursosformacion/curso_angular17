import { TestBed, ComponentFixture } from '@angular/core/testing';


import { MedicoComponent } from './medico.component';
import { MedicoService } from './../medico.service';
import { HttpClientModule } from '@angular/common/http';

describe('Test Medico Component', () => {

    let _component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MedicoComponent],
            providers: [MedicoService],
            imports: [HttpClientModule]
        }); //               .compileComponents();

        fixture = TestBed.createComponent(MedicoComponent);
        _component = fixture.componentInstance;
    })

    it('Creacion componente', () => {
        expect(_component).toBeTruthy();
    });

    it('Comprobacion saludo', () => {
        const nombre = 'Antonio';
        const resp = _component.saludarMedico(nombre);
        expect(resp).toContain(nombre);
    });
})