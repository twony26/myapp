import { Component, OnInit, Output } from '@angular/core';
import { Joke } from 'src/app/joke/joke.component';
import { EventEmitter } from '@angular/core';
import { ViewEncapsulation } from "@angular/core";

@Component({
  selector: 'joke-form',
  template: `
  <div class="card card-block">
  <h4 class="card-title">Create Joke</h4>
  <div class="form-group">
    <input type="text"
           class="form-control"
           placeholder="Enter the setup"
           #setup>
  </div>
  <div class="form-group">
    <input type="text"
           class="form-control"
           placeholder="Enter the punchline"
           #punchline>
  </div>
  <button type="button"
          class="btn btn-primary"
          (click)="createJoke(setup.value, punchline.value)">Create
  </button>
</div>
  `,
  styles: [`
  .card {
  background-color: gray;
}
  `]
  ,encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.Native
  // , encapsulation: ViewEncapsulation.None
})
export class JokeFormComponent {
  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}
