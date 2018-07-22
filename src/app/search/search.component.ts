import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  searchField: FormControl;
  searches: string[] = [];

  ngOnInit() {
    this.searchField = new FormControl();
    const d = this.searchField.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    )

    d.subscribe(term =>{
      this.searches.push(term.toString());
    });
    // this.searchField.valueChanges.pipe(debounceTime(500))
    //   .subscribe(term => {
    //     this.searches.push(term);
    //   });
  }
}
