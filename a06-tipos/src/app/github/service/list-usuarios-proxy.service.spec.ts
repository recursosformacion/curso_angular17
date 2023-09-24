import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { ListUsuariosProxyService } from './list-usuarios-proxy.service';
import { LISTA_USUARIOS_FAKE } from './fake-list-user.spec';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { DebugElement } from '@angular/core';

fdescribe('ListUsuariosProxyService', () => {
  let httpTestingController: HttpTestingController;
  let service: ListUsuariosProxyService;
 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ListUsuariosProxyService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ListUsuariosProxyService);

  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('Se tiene que crear', () => {
    expect(service).toBeTruthy();
  });

  // it('Tiene que leer usuarios', async(() => {
  //   service.getUsers().subscribe(
  //     (response) => {
  //       console.log(response);
  //       expect(response).not.toBeNull()
  //     },
  //     (error) => fail(error)
  //   );
  // }));

  it('Tiene que leer usuarios',
    inject(
      [HttpTestingController, ListUsuariosProxyService],
      (httpMock: HttpTestingController,
        dataService: ListUsuariosProxyService) => {

        dataService.getUsers()
          .subscribe((recibo: any[]) => {
            expect(recibo.length).toBe(LISTA_USUARIOS_FAKE.length);
            console.log(recibo);
          });

        const mockReq = httpMock.expectOne(dataService.API_URL);

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');

        expect(mockReq.request.method).toEqual('GET');

        //mockReq.flush(LISTA_USUARIOS_FAKE);
        mockReq.flush('Hola... holita');

        httpMock.verify();
      }
    )
  )

});
