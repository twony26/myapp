import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'async-pipe',
  template: `
 <div class="card card-block">
  <h4 class="card-title">AsyncPipe</h4>
  <p class="card-text" ngNonBindable>{{ promise }}</p>
  <p class="card-text">{{ promise | async }}</p>
 </div>
  `
})
export class AsyncPipeComponent implements OnInit {
 promise: Promise<any>;
  constructor() {
   this.promise = this.getPromise();
   console.log(this.promise);
  }

  ngOnInit() {
  }

  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise complete!"), 3000);
    });
  }

}
