import { Injectable } from '@angular/core';

import { UsuarioModel } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Crear nuevo  usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = 'AIzaSyATpR7b0b7DRPfxqmdmr0CyDMBUXljX1Do';

  userToken: string;

  constructor(private http: HttpClient) { }

  logout() {
    localStorage.removeItem('token');
  }

  login(usuario: UsuarioModel) {

    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };
    return this.http.post(
      `${this.url}signInWithPassword?key=${this.apikey}`,
      authData
    ).pipe(
      map(resp => {
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }

  nuevoUsuario(usuario: UsuarioModel) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}signUp?key=${this.apikey}`,
      authData
    ).pipe(
      map(resp => {
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }


  private guardarToken(idToken: string) {

    this.userToken = idToken;
    localStorage.setItem('token', idToken);
    const hoy = new Date();
    hoy.setSeconds( 3600 ); // por simplificar
    localStorage.setItem('expira', hoy.getTime().toString() );

  }

  private leerToken() {

    if (localStorage.getItem(' token')) {
      this.userToken = localStorage.getItem(' token');
    } else {
      this.userToken = '';
    }
  }

  estaAutenticado(): boolean {
    this.leerToken();
    if ( this.userToken.length <2 ) {
      return false;
    }
    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    return  (expiraDate > new Date());
  }

}
