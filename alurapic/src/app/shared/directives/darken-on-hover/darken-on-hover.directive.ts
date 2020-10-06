import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDarkenOnHover]'
})
export class DarkenOnHoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }


  @HostListener('mouseover')
  darkenOn(): void {
    this.renderer.setStyle(this.el.nativeElement, 'filter', 'brightness(90%)');
  }

  @HostListener('mouseleave')
  darkenOff(): void {
    this.renderer.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }

}
