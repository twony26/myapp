import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel-item',
  template: `
<div class="carousel-item text-center" [hidden]="!isActive">
   <ng-content></ng-content>
</div>
`
})
export class CarouselItemComponent {
  isActive: boolean = false;
}
