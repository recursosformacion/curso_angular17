import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListUsuariosProxyService } from './service/list-usuarios-proxy.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html'
})
export class GithubComponent implements OnInit, OnDestroy {

  controlLeer: Subscription;
  data: any[];

  constructor(private proxy: ListUsuariosProxyService) {


  }

  ngOnInit() {
    this.controlLeer = this.proxy.getUsers()
      .subscribe(
        (response) => {
          console.log('ok', response);
          this.data = response;
        },
        (error) => console.error('err:', error)
      );
  }

  ngOnDestroy() {
    this.controlLeer.unsubscribe();
  }
}
