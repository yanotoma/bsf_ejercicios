import { WeatherItem } from '../weather-card/WeatherItem';

import { Component, OnInit } from '@angular/core';
import { WeatherService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

  currentWeather: WeatherItem; // TODO: Create model for Weather
  forecast: Array<WeatherItem>;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {

    this.weatherService.getWeather().subscribe( res => {
      this.currentWeather = res.data[0];
    });

    this.weatherService.getForecast().subscribe( res => {
      this.forecast = res.data.filter( item => item.datetime.split(':')[1] === '15');
      this.forecast.map( item => {
        item.city_name = res.city_name;
      } );
    });

  }

}
