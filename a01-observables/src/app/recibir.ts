import { Subscription } from "rxjs/Subscription";
import { Component, OnInit } from '@angular/core';
import { CompartirDatos } from './comunicacion';

@Component({
    selector: 'app-ejemplo',
  })
export class recibirEjemplo implements OnInit {
    
    dataSubscription: Subscription;
    data: Array<number>

    constructor(public _comm: CompartirDatos ) {
    }
    public ngOnInit() {
        this.dataSubscription = this._comm.dataSource$
            .subscribe(data => {
                this.data = data;
            });
    }
    public ngOnDestroy(): void {
        this.dataSubscription.unsubscribe();
    }
}