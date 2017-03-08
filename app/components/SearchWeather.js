import $ from "jquery";

class SearchWeather{
  constructor(callback){
    this.isLoading  = false;
    this.cityInputRef = $("#cityName");
    this.getWeatherBtnRef = $("#getWeather");
    this.getWeatherBtnRef.on('click', (eve)=>{
      eve.preventDefault();
      let cityValue = this.cityInputRef.val();
      cityValue = cityValue.trim();
      if(cityValue.length>0 && !this.isLoading){
          callback(cityValue);
      }
    });
  }

  startLoading(){
    this.isLoading  = true;
    this.getWeatherBtnRef.button('loading');
  }

  stopLoading(){
    this.isLoading  = false;
    this.getWeatherBtnRef.button('reset');
  }

  reset() {
    this.stopLoading();
    this.cityInputRef.val('');
  }
}

export default SearchWeather;
