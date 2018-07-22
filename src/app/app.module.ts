// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';


// import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { CarouselComponent } from './carousel/carousel.component';
// import { CarouselItemComponent } from './carousel-item/carousel-item.component';
// import { JokeFormComponent } from './joke-form/joke-form.component';


// @NgModule({
//   declarations: [
//     AppComponent,
//     HeaderComponent,
//     CarouselComponent,
//     CarouselItemComponent,
//     JokeFormComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     HttpModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {
  Component,
  NgModule,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { JokeComponent } from "src/app/joke/joke.component";
import { JokeListComponent } from "src/app/joke-list/joke-list.component";
import { JokeFormComponent } from "src/app/joke-form/joke-form.component";
import { AppComponent } from "src/app/app.component";
import { CardHoverDirective } from './card-hover.directive';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SearchService } from 'src/app/search.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpModule],
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    CardHoverDirective,
    AsyncPipeComponent,
    SearchComponent
  ],
  bootstrap: [AppComponent],
  providers: [ SearchService]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
