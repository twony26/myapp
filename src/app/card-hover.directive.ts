import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';



@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {
  @HostBinding('class.card-outline-primary') private ishovering: boolean;

  constructor(private el: ElementRef, private renderer: Renderer) {
    this.renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
    el.nativeElement.style.backgroundColor = 'gray';
  }

  @HostListener('mouseover') onMouseOver() {
    // window.alert("hover");
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setElementStyle(part, 'display', 'block');
    this.ishovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    // window.alert("hover");
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setElementStyle(part, 'display', 'none');
    this.ishovering = false;
  }

}
