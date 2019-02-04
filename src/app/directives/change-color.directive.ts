import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})

export class ChangeColorDirective {
  constructor( el: ElementRef, renderer: Renderer2 ) {renderer.setStyle(el.nativeElement, 'color', 'red'); }
}
