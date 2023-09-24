import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check enlace medico', () => {

    const elems = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    console.log(elems);
    let existe = false;
    for (const ele of elems) {
      if (ele.attributes['routerLink'] === '/medicos') {
        existe = true;
        break;
      }
    }
    //existe = true;
    expect(existe).toBeTruthy();
  })
});
