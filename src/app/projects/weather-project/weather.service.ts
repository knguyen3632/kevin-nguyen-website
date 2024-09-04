import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from './weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey: string = 'apikey=IwiyNoUubj17a5OtICoF0IO7wKe65Cj5';
  http = inject(HttpClient);

  constructor() { }

  getWeather(zipcode: string, unit: string) {
    let url = 'https://api.tomorrow.io/v4/weather/forecast?'
      + 'location=' + zipcode + '%20us&'
      + 'units=' + unit + '&'
      + this.apiKey;

    console.log(url);

    return this.http.get<Weather>(url);

    // return this.http.get("./assets/weather-example.json");
  }
}
