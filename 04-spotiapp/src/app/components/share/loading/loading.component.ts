import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styles: []
})
export class LoadingComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { 
    this.activateRoute.params.subscribe (params => {
      console.log(params);
    })
  }

  ngOnInit() {
  }

}
