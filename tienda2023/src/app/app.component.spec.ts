import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './component/body/categorias/categorias.component';
import { FormularioCategoriaComponent } from './component/body/categorias/formulario-categoria/formulario-categoria.component';
import { CabeceraComponent } from './component/header/cabecera/cabecera.component';
import { MenuComponent } from './component/varios/menu/menu.component';
import { PanelRComponent } from './component/varios/panel-r/panel-r.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
        
      ],
      declarations: [
        AppComponent,
        CabeceraComponent,
        MenuComponent,
        CategoriasComponent,
        PanelRComponent,
        FormularioCategoriaComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tienda2023'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('tienda2023');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
   
  // });
});
