import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {

  //data: Array<any>= [];
  private _datasource = new BehaviorSubject<Array<any>>([]);
  datasource$ = this._datasource.asObservable();

  constructor() { }

public setData(data: Array<any>){
  this._datasource.next(data);
}

}

