import { Component } from '@angular/core';
import { Joke } from "src/app/joke/joke.component";
import { AsyncPipeComponent } from "src/app/async-pipe/async-pipe.component";
import { SearchComponent } from "src/app/search/search.component";
import { SearchService } from "src/app/search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  joke: Joke = new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’");
  private loading: boolean = false;

  constructor(private itunes: SearchService) { }

  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).then(() => this.loading = false);
  }

}
