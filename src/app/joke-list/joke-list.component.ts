import { Component, OnInit } from '@angular/core';
import { Joke, JokeComponent } from "src/app/joke/joke.component";
import { ViewChild } from "@angular/core";
import { AfterViewInit } from "@angular/core";
import { ViewChildren } from "@angular/core";
import { QueryList, ElementRef } from "@angular/core";
import { CardHoverDirective } from "src/app/card-hover.directive";

@Component({
  selector: "joke-list",
  template: `
<h4 #header>View Jokes</h4>
<joke *ngFor="let j of jokes" [joke]="j">
  <span class="setup">{{ j.setup }}?</span>
  <h1 class="punchline">{{ j.punchline }}</h1>
</joke>
<h4>Content Jokes</h4>
<ng-content></ng-content>
<h2>Asysnc</h2>
<async-pipe></async-pipe>
  `
})
export class JokeListComponent implements AfterViewInit {

  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;

  constructor() {
    console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
  }

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);
    let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log(jokes);
  }

  jokes: Joke[] = [
    new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"),
    new Joke("What kind of cheese do you use to disguise a small horse", "Mask-a-pony (Mascarpone)")
  ];

  // addJoke(joke) {
  //   this.jokes.unshift(joke);
  // }
}
