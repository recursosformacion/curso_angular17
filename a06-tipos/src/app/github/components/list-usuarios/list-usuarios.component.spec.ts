import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsuariosComponent } from './list-usuarios.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ListUsuariosComponent', () => {
  let component: ListUsuariosComponent;
  let fixture: ComponentFixture<ListUsuariosComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsuariosComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
