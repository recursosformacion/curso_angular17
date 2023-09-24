import { Component, OnInit } from '@angular/core';
import { StarwarsService } from './../../service/starwars.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  data$: Observable<any>;

  constructor(private sws: StarwarsService) { 

    this.data$ =
     this.sws.getData();
  }

  ngOnInit() {
  }

}
