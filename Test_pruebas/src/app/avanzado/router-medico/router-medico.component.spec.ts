import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Observable, EMPTY, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

class FakeRouter {
  navigate(params) { };
}

class FakeActivateRoute {
  //params: Observable<any> = EMPTY;
  private subject = new Subject();

  push(valor) {
    this.subject.next(valor);
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        { provide: Router, userClass: FakeRouter },
        { provide: ActivatedRoute, userClass: FakeActivateRoute }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Redirigir a medico al guardar', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    // spyOn(router, 'navibate').and.returnValue(Promise.resolve(true)); si tuviera que devolver algo
    component.guardarMedico();
    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  })

  
});
