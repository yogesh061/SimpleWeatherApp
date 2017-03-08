import $ from "jquery";

const OPEN_WEATHER_MAP_ENDPOINT = 'http://api.openweathermap.org/data/2.5/forecast?appid=cebc68a9a277f01156da13f23b455d85&units=metric';
export function getFiveDaysWeatherOfCity(location){
  var encodedLocation = encodeURIComponent(location);
  var requestUrl = `${OPEN_WEATHER_MAP_ENDPOINT}&q=${encodedLocation}`;
  return new Promise(function(resolve, reject){
      $.ajax({
         url: requestUrl,
         type: 'get'
      })
      .done(resolve)
      .fail(reject)
  });
}
