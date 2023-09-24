import { Component, OnInit } from '@angular/core';
import { StarwarsService } from './../../service/starwars.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent implements OnInit {

  data$: Observable<any>;
  alcance: string='people';
  ident : number = 3;

  constructor(private sws: StarwarsService) { 

    this.data$ =
     this.sws.getData(this.alcance, this.ident);
  }

  ngOnInit() {
  }

}
