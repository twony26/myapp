import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: "joke",
  template: `
<div class="card card-block" appCardHover>
  <h4 class="card-title"><ng-content select=".setup"></ng-content></h4>
  <p class="card-text"
     [hidden]="data.hide"><ng-content select=".punchline"></ng-content></p>
  <a (click)="data.toggle()"
     class="btn btn-warning">Tell Me
  </a>
</div>
`
})
export class JokeComponent {
  @Input("joke") data: Joke;
}


export class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}
