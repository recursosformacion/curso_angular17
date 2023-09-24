import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CompartirDatos {
    data: Array<any> = [];

    public _dataSource = new BehaviorSubject<Array<any>>([]);
    dataSource$ = this._dataSource.asObservable();
    
    public setData(data: Array<any>) {
        this.data = data;
        this._dataSource.next(data);
    }
}
