import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective implements OnInit {

  @Input("appResaltado") nuevoColor: string;

  constructor(private el: ElementRef) {
    
  }

  ngOnInit(){
    console.log("directiva llamada " + this.nuevoColor);
    this.resaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseenter') ratonEntro() {
    this.resaltar('red');
  }

  @HostListener('mouseleave') ratonSalio() {
    console.log("sale");
    this.resaltar(null);
  }

  private resaltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
