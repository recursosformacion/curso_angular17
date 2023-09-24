import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IncrementadorComponent],
            imports: [FormsModule]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        el = de.nativeElement;

    });

    it('Comprobar leyenda corto', () => {

        const titulo: string = 'Progreso de carga';
        component.leyenda = titulo;
        fixture.detectChanges();                // disparar la deteccion de cambios

        const elem = el.querySelector('h3');
        expect(elem.innerHTML).toContain(titulo)
    });

    it('Comprobar leyenda', () => {
        const titulo: string = 'Progreso de carga';
        component.leyenda = titulo;
        fixture.detectChanges();                // disparar la deteccion de cambios
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect(elem.innerHTML).toContain(titulo)
    });

    it('cambio de input', fakeAsync(() => {
        component.cambiarValor(5);
        fixture.detectChanges();
        expect(fixture.isStable()).toBe(false, 'expect fixture not to be stable');
        tick();
        const input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
        expect(input.value).toBe('55');
    }))

    it('deteccion de botones 0', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        botones[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45);

    })

    it('deteccion de botones 1', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        botones[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe(55);
    })

    it('En titulo debe mostrar el progreso', () => {

        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        botones[0].triggerEventHandler('click', null);
        fixture.detectChanges();
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect(elem.innerHTML).toContain('45');

    })

});
