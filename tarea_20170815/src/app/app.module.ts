import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { BooksComponent } from './books/books.component';

import { WeatherService } from './home/home.service'
import { WeatherCardComponent } from './weather-card/weather-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    WeatherCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
