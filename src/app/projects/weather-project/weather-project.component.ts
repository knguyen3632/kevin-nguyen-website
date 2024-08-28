import { Component, inject } from '@angular/core';

import { WeatherService } from './weather.service';
import { Weather } from './weather.model';

@Component({
  selector: 'app-weather-project',
  templateUrl: './weather-project.component.html',
  styleUrls: ['./weather-project.component.css']
})
export class WeatherProjectComponent {
  weatherService = inject(WeatherService);
  zipcode = '';
  unit = '';
  weather: Weather = <Weather>{};

  setUnit(event: any) {
    this.weather = {};
  }

  getWeather() {
    console.log(this.zipcode);

    this.weatherService.getWeather(this.zipcode, this.unit).subscribe(response => {
      this.weather = response;
      console.log(this.weather);
    });
  }
}
