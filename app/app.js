import $ from "jquery";
import {getFiveDaysWeatherOfCity} from 'WeatherAPI';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import ApplicationCss from './css/app.css';
import SearchWeather from 'SearchWeather.js'
import WeatherInfoForDay from 'WeatherInfoForDay.js'

class App {
  constructor(){
    let weatherComponentName  = 'weatherInfo';
    this.searchWeather = new SearchWeather((e)=>{
      this.onSearchWeatherResponse(e)
    });
    this.weatherInfo = new WeatherInfoForDay(weatherComponentName);
  }

  onSearchWeatherResponse(cityName){
    this.searchWeather.startLoading();
    getFiveDaysWeatherOfCity(cityName).then((e) => {
      this.searchWeather.stopLoading();
      if(e.list){
          this.weatherInfo.render(e);
          this.searchWeather.reset();
      }else{
          this.onError();
      }
    }, (e)=> {
      this.onError();
    })
  }

  onError(){
    this.searchWeather.reset();
    this.weatherInfo.clear();
    alert("Cannot find the city, please try again!");
  }
}

$(function(){
  //initialize the app once jqery onload event is triggered to ensure that DOM elements are loaded
  let app = new App();
})
