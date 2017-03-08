import $ from "jquery";
import {getFiveDaysWeatherOfCity} from 'WeatherAPI';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import ApplicationCss from './css/app.css';
import SearchWeather from 'SearchWeather.js'
import WeatherInfoForDay from 'WeatherInfoForDay.js'

class App {
  constructor(){
    this.searchWeather = new SearchWeather((e)=>{
      this.onSearchWeatherResponse(e)
    });
    this.weatherInfo = new WeatherInfoForDay();
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
  let app = new App();
})

/*let onSearchWeather = function(cityName){
  searchWeather.startLoading();
  getFiveDaysWeatherOfCity(cityName).then(function(e){
    searchWeather.stopLoading();
    let weatherInfo  = new WeatherInfoForDay(e);
    let renderedData = weatherInfo.render();
    $("#weatherInfo").html(renderedData);
  }).catch(function(){
    searchWeather.stopLoading();
  })
}
const searchWeather = new SearchWeather(onSearchWeather);
*/
//let weatherInfo  = new WeatherInfoForDay({test:"test"});
//let renderedData = weatherInfo.render();
//console.log($("#weatherInfo"));
//$("#weatherInfo").html(renderedData);
/*
getFiveDaysWeatherOfCity('Pune').then(function(e){
  alert('got results');
}).catch(function(){
  alert('error');
})
*/
