
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit, OnChanges {

  @Input() currentWeather: any;

  constructor() { }

  ngOnInit() {  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.currentWeather.currentValue) {
      this.currentWeather.datetime = this.currentWeather.datetime.split(':')[0];
    }
  }

  getImageWeather(icon: string) {
    const url = `https://www.weatherbit.io/static/img/icons/${icon}.png`;
    return url;
  }

}
